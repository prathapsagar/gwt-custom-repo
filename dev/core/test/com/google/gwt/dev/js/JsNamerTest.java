/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.google.gwt.dev.js;

import com.google.gwt.core.ext.BadPropertyValueException;
import com.google.gwt.core.ext.ConfigurationProperty;
import com.google.gwt.core.ext.DefaultConfigurationProperty;
import com.google.gwt.core.ext.PropertyOracle;
import com.google.gwt.core.ext.SelectionProperty;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.dev.jjs.SourceOrigin;
import com.google.gwt.dev.js.ast.JsProgram;
import com.google.gwt.dev.js.ast.JsStatement;
import com.google.gwt.dev.js.ast.JsVisitor;
import com.google.gwt.dev.util.DefaultTextOutput;
import com.google.gwt.dev.util.TextOutput;

import junit.framework.TestCase;

import java.io.IOException;
import java.io.StringReader;
import java.util.Arrays;
import java.util.List;

/**
 * Tests the JsStaticEval optimizer.
 */
public class JsNamerTest extends TestCase {

  private BlacklistProps props;

  @Override
  protected void setUp() throws Exception {
    super.setUp();
    props = new BlacklistProps();
    props.blacklist = Arrays.asList("foo, bar", "baz");
    props.blacklistSuffixes = Arrays.asList("logger");
  }

  public void testBannedIdent() throws Exception {
    assertEquals("function foo_0(){return 42}\n",
        rename("function foo() { return 42; }"));
    assertEquals("function bar_0(){return 42}\n",
        rename("function bar() { return 42; }"));
    assertEquals("function baz_0(){return 42}\n",
        rename("function baz() { return 42; }"));
  }

  public void testBannedSuffix() throws Exception {
    assertEquals("function fooLogger_0(){return 42}\n",
        rename("function fooLogger() { return 42; }"));
    assertEquals("function foologger_0(){return 42}\n",
        rename("function foologger() { return 42; }"));
    assertEquals("function fooLOGGER_0(){return 42}\n",
        rename("function fooLOGGER() { return 42; }"));
  }
  public void testNoBlacklist() throws Exception {
    props.blacklist = null;
    props.blacklistSuffixes = null;
    assertEquals("function fooLogger(){return 42}\n",
        rename("function fooLogger() { return 42; }"));
  }

  public void testAvoidDuplicatesSameScope() throws Exception {
    JsProgram program = parseJs(
        "function f1(){ return 1 }\n" +
        "function f2(){ return 2 }\n");

    program.getScope().findExistingName("f1").setShortIdent("thing");
    program.getScope().findExistingName("f2").setShortIdent("thing");

    assertEquals(
        "function thing(){return 1}\n" +
        "function thing_0(){return 2}\n",
        rename(program));
  }

  public void testAvoidDuplicatesChildScope() throws Exception {
    JsProgram program = parseJs(
        "function f1(){\n" +
        "  function f2(){ return 2 }\n" +
        "  return 1\n" +
        "}\n");

    program.getScope().findExistingName("f1").setShortIdent("thing");
    program.getScope().getChildren().get(0).findExistingName("f2").setShortIdent("thing");

    assertEquals("function thing_0(){function thing(){return 2}\nreturn 1}\n",
        rename(program));
  }

  private String rename(String js) throws Exception {
    return rename(parseJs(js));
  }

  private JsProgram parseJs(String js) throws IOException, JsParserException {
    JsProgram program = new JsProgram();
    List<JsStatement> expected = JsParser.parse(SourceOrigin.UNKNOWN,
        program.getScope(), new StringReader(js));
    program.getGlobalBlock().getStatements().addAll(expected);
    return program;
  }

  private String rename(JsProgram program) {
    JsSymbolResolver.exec(program);
    JsPrettyNamer.exec(program, new PropertyOracle[]{props});
    TextOutput text = new DefaultTextOutput(true);
    JsVisitor generator = new JsSourceGenerationVisitor(text);
    generator.accept(program);
    return text.toString();
  }

  private static class BlacklistProps implements PropertyOracle {

    List<String> blacklist;
    List<String> blacklistSuffixes;

    @Override
    public ConfigurationProperty getConfigurationProperty(String propertyName)
        throws BadPropertyValueException {

      if (JsNamer.BLACKLIST.equals(propertyName) && blacklist != null) {
        return new DefaultConfigurationProperty(JsNamer.BLACKLIST, blacklist);
      }
      if (JsNamer.BLACKLIST_SUFFIXES.equals(propertyName) && blacklistSuffixes != null) {
        return new DefaultConfigurationProperty(JsNamer.BLACKLIST_SUFFIXES, blacklistSuffixes);
      }
      throw new BadPropertyValueException("No property value for " + propertyName);
    }

    @Override
    public SelectionProperty getSelectionProperty(TreeLogger logger,
        String propertyName) throws BadPropertyValueException {
      return null;
    }
  }
}
