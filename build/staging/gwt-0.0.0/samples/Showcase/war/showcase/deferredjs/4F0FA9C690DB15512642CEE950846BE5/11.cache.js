$wnd.showcase.runAsyncCallback11("function W6b(){}\nfunction $6b(){}\nfunction P6b(a,b){a.b=b}\nfunction Q6b(a){if(a==F6b){return true}MG();return a==I6b}\nfunction R6b(a){if(a==E6b){return true}MG();return a==D6b}\nfunction Y6b(a){this.b=(Q8b(),L8b).a;this.d=(X8b(),W8b).a;this.a=a}\nfunction N6b(a,b){var c;c=UV(a.eb,94);c.b=b.a;!!c.c&&J0b(c.c,b)}\nfunction O6b(a,b){var c;c=UV(a.eb,94);c.d=b.a;!!c.c&&L0b(c.c,b)}\nfunction S6b(){J6b();N0b.call(this);this.b=(Q8b(),L8b);this.c=(X8b(),W8b);ls((_Yb(),this.e),cKc,0);ls(this.e,dKc,0)}\nfunction J6b(){J6b=oDc;C6b=new W6b;F6b=new W6b;E6b=new W6b;D6b=new W6b;G6b=new W6b;H6b=new W6b;I6b=new W6b}\nfunction K6b(a,b,c){var d;if(c==C6b){if(b==a.a){return}else if(a.a){throw new Jsc('Only one CENTER widget may be added')}}Bj(b);Xkc(a.j,b);c==C6b&&(a.a=b);d=new Y6b(c);b.eb=d;N6b(b,a.b);O6b(b,a.c);M6b(a);Dj(b,a)}\nfunction L6b(a,b){var c,d,e,f,g,i,j;ukc((_Yb(),a.gb),OFc,b);i=new TAc;j=new glc(a.j);while(j.b<j.c.c){c=elc(j);g=UV(c.eb,94).a;e=UV(i.qe(g),141);d=!e?1:e.a;f=g==G6b?'north'+d:g==H6b?'south'+d:g==I6b?'west'+d:g==D6b?'east'+d:g==F6b?'linestart'+d:g==E6b?'lineend'+d:XJc;ukc(Fs(c.gb),b,f);i.se(g,Zsc(d+1))}}\nfunction M6b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;b=(_Yb(),a.d);while(b.children.length>0){Vr(b,b.children[0])}r=1;e=1;for(j=new glc(a.j);j.b<j.c.c;){d=elc(j);f=UV(d.eb,94).a;f==G6b||f==H6b?++r:(f==D6b||f==I6b||f==F6b||f==E6b)&&++e}s=JV(Zeb,tDc,95,r,0);for(g=0;g<r;++g){s[g]=new $6b;s[g].b=Os($doc,aKc);aZb(b,s[g].b)}n=0;o=e-1;p=0;t=r-1;c=null;for(i=new glc(a.j);i.b<i.c.c;){d=elc(i);k=UV(d.eb,94);u=Os($doc,bKc);k.c=u;ms(k.c,PJc,k.b);Et(k.c.style,QJc,k.d);ms(k.c,oGc,OFc);ms(k.c,nGc,OFc);if(k.a==G6b){dZb(s[p].b,u,s[p].a);aZb(u,d.gb);ls(u,SLc,o-n+1);++p}else if(k.a==H6b){dZb(s[t].b,u,s[t].a);aZb(u,d.gb);ls(u,SLc,o-n+1);--t}else if(k.a==C6b){c=u}else if(Q6b(k.a)){q=s[p];dZb(q.b,u,q.a++);aZb(u,d.gb);ls(u,RMc,t-p+1);++n}else if(R6b(k.a)){q=s[p];dZb(q.b,u,q.a);aZb(u,d.gb);ls(u,RMc,t-p+1);--o}}if(a.a){q=s[p];dZb(q.b,c,q.a);aZb(c,Pi(a.a))}}\nngb(747,1,gEc);_.sc=function bEb(){var a,b,c;Yib(this.a,(a=new S6b,is((_Yb(),a.gb),'cw-DockPanel'),ls(a.e,cKc,4),P6b(a,(Q8b(),K8b)),K6b(a,new b5b(JMc),(J6b(),G6b)),K6b(a,new b5b(KMc),H6b),K6b(a,new b5b(LMc),D6b),K6b(a,new b5b(MMc),I6b),K6b(a,new b5b(NMc),G6b),K6b(a,new b5b(OMc),H6b),b=new b5b(\"Voici un <code>panneau de d\\xE9filement<\\/code> situ\\xE9 au centre d'un <code>panneau d'ancrage<\\/code>. Si des contenus relativement volumineux sont ins\\xE9r\\xE9s au milieu de ce panneau \\xE0 d\\xE9filement et si sa taille est d\\xE9finie, il prend la forme d'une zone dot\\xE9e d'une fonction de d\\xE9filement \\xE0 l'int\\xE9rieur de la page, sans l'utilisation d'un IFRAME.<br><br>Voici un texte encore plus obscur qui va surtout servir \\xE0 faire d\\xE9filer cet \\xE9l\\xE9ment jusqu'en bas de sa zone visible. Sinon, il vous faudra r\\xE9duire ce panneau \\xE0 une taille minuscule pour pouvoir afficher ces formidables barres de d\\xE9filement!\"),c=new W1b(b),c.gb.style[oGc]=PMc,c.gb.style[nGc]=QMc,K6b(a,c,C6b),L6b(a,'cwDockPanel'),a))};ngb(1051,1007,xDc,S6b);_.Hb=function T6b(a){L6b(this,a)};_.$b=function U6b(a){var b;b=x_b(this,a);if(b){a==this.a&&(this.a=null);M6b(this)}return b};var C6b,D6b,E6b,F6b,G6b,H6b,I6b;ngb(1052,1,{},W6b);ngb(1053,1,{94:1},Y6b);ngb(1054,1,{95:1},$6b);_.a=0;var q9=tsc(SKc,'DockPanel',1051),p9=tsc(SKc,'DockPanel$TmpRow',1054),Zeb=ssc(ZKc,'DockPanel$TmpRow;',1386,p9),n9=tsc(SKc,'DockPanel$DockLayoutConstant',1052),o9=tsc(SKc,'DockPanel$LayoutData',1053);VEc(Zn)(11);\n//# sourceURL=showcase-11.js\n")
