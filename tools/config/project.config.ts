import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
        'node_modules/material-design-icons/iconfont/**',
        'node_modules/font-awesome/fonts/**'
        // 'node_modules/materialize-css/fonts/**'
  ];
  constructor() {
    super();
    this.APP_TITLE = 'PayFactor';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'materialize-css/dist/css/materialize.min.css', inject: true},
      // {src: 'clarity-icons/clarity-icons.min.css', inject: true},
      // {src: 'clarity-ui/clarity-ui.min.css', inject: true},
      // {src: 'clarity-icons/clarity-icons.min.js', inject: 'libs'},
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'font-awesome/css/font-awesome.min.css', inject: true},
      {src: 'purecss/build/pure-min.css', inject: true},
      {src: 'w3-css/w3.css', inject: true},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      // {src: 'materialize-css/dist/js/materialize.min.js', inject: 'libs'}
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: '@angular/material/core/theming/prebuilt/indigo-pink.css', inject: true}
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [
    //   {
    //       name:'@angular/material',
    //       path:'node_modules/@angular/material/bundles/material.umd.js',
    //       packageMeta:{
    //         main: 'index.js',
    //         defaultExtension: 'js'
    //       }
    //   },
    //   {
    //       name:'@swimlane/ngx-datatable',
    //       path:'node_modules/@swimlane/ngx-datatable/release/index.js',
    //       packageMeta:{
    //         main: 'index.js',
    //         defaultExtension: 'js'
    //       }
    //   }];

    // this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
