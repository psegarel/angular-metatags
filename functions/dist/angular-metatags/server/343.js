"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=343,exports.ids=[343],exports.modules={19343:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GalleryModule:()=>GalleryModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305),metatags_service=__webpack_require__(97768);function GalleryComponent_div_0_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div")(1,"h1"),core._uU(2),core.qZA(),core.TgZ(3,"h2"),core._uU(4),core.qZA()()),2&rf){const pageContent_r1=ctx.ngIf;core.xp6(2),core.Oqu(null==pageContent_r1?null:pageContent_r1.title),core.xp6(2),core.Oqu(null==pageContent_r1?null:pageContent_r1.description)}}__name(GalleryComponent_div_0_Template,"GalleryComponent_div_0_Template");class GalleryComponent{constructor(metatagsService){this.metatagsService=metatagsService,this.updateTags$=this.metatagsService.update("gallery")}}__name(GalleryComponent,"GalleryComponent"),GalleryComponent.\u0275fac=__name(function(t){return new(t||GalleryComponent)(core.Y36(metatags_service.A))},"GalleryComponent_Factory"),GalleryComponent.\u0275cmp=core.Xpm({type:GalleryComponent,selectors:[["app-gallery"]],decls:2,vars:3,consts:[[4,"ngIf"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,GalleryComponent_div_0_Template,5,2,"div",0),core.ALo(1,"async")),2&rf&&core.Q6J("ngIf",core.lcZ(1,1,ctx.updateTags$))},"GalleryComponent_Template"),dependencies:[common.O5,common.Ov],styles:[".hide[_ngcontent-%COMP%]{position:absolute;top:-100px;left:-100px}"]});const routes=[{path:"",component:GalleryComponent}];class GalleryRoutingModule{}__name(GalleryRoutingModule,"GalleryRoutingModule"),GalleryRoutingModule.\u0275fac=__name(function(t){return new(t||GalleryRoutingModule)},"GalleryRoutingModule_Factory"),GalleryRoutingModule.\u0275mod=core.oAB({type:GalleryRoutingModule}),GalleryRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});class GalleryModule{}__name(GalleryModule,"GalleryModule"),GalleryModule.\u0275fac=__name(function(t){return new(t||GalleryModule)},"GalleryModule_Factory"),GalleryModule.\u0275mod=core.oAB({type:GalleryModule}),GalleryModule.\u0275inj=core.cJS({imports:[common.ez,GalleryRoutingModule]})}};