currentDirectory:: /user/username/projects/noEmitOnError useCaseSensitiveFileNames: false
Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}


//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;


//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }


//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../dev-build.js",
    "module": "amd",
    "declaration": true,
    "incremental": true,
    "noEmitOnError": true
  }
}



Output::
/a/lib/tsc --b --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because output file '../dev-build.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "declaration": true,
  "incremental": true,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/user/username/projects/dev-build.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./noemitonerror/shared/types/db.ts","./noemitonerror/src/main.ts","./noemitonerror/src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"-5014788164-export interface A {\n    name: string;\n}\n","impliedFormat":1},{"version":"-2574607723-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n;\n","impliedFormat":1},{"version":"9084524823-console.log(\"hi\");\nexport { }\n","impliedFormat":1}],"root":[[2,4]],"options":{"declaration":true,"module":2,"noEmitOnError":true,"outFile":"./dev-build.js"},"changeFileSet":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/user/username/projects/dev-build.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./noemitonerror/shared/types/db.ts",
      "./noemitonerror/src/main.ts",
      "./noemitonerror/src/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./noemitonerror/shared/types/db.ts": {
        "original": {
          "version": "-5014788164-export interface A {\n    name: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-5014788164-export interface A {\n    name: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./noemitonerror/src/main.ts": {
        "original": {
          "version": "-2574607723-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n;\n",
          "impliedFormat": 1
        },
        "version": "-2574607723-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n;\n",
        "impliedFormat": "commonjs"
      },
      "./noemitonerror/src/other.ts": {
        "original": {
          "version": "9084524823-console.log(\"hi\");\nexport { }\n",
          "impliedFormat": 1
        },
        "version": "9084524823-console.log(\"hi\");\nexport { }\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "./noemitonerror/shared/types/db.ts",
          "./noemitonerror/src/main.ts",
          "./noemitonerror/src/other.ts"
        ]
      ]
    ],
    "options": {
      "declaration": true,
      "module": 2,
      "noEmitOnError": true,
      "outFile": "./dev-build.js"
    },
    "changeFileSet": [
      "../../../a/lib/lib.d.ts",
      "./noemitonerror/shared/types/db.ts",
      "./noemitonerror/src/main.ts",
      "./noemitonerror/src/other.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1086
}



Change:: no-change-run
Input::


Output::
/a/lib/tsc --b --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because buildinfo file '../dev-build.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "declaration": true,
  "incremental": true,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: Fix error
Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};



Output::
/a/lib/tsc --b --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is out of date because buildinfo file '../dev-build.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "declaration": true,
  "incremental": true,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No shapes updated in the builder::


//// [/user/username/projects/dev-build.d.ts]
declare module "shared/types/db" {
    export interface A {
        name: string;
    }
}
declare module "src/main" { }
declare module "src/other" {
    export {};
}


//// [/user/username/projects/dev-build.js]
define("shared/types/db", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var a = {
        lastName: 'sdsd'
    };
});
define("src/other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("hi");
});


//// [/user/username/projects/dev-build.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./noemitonerror/shared/types/db.ts","./noemitonerror/src/main.ts","./noemitonerror/src/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"-5014788164-export interface A {\n    name: string;\n}\n","impliedFormat":1},{"version":"-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};","impliedFormat":1},{"version":"9084524823-console.log(\"hi\");\nexport { }\n","impliedFormat":1}],"root":[[2,4]],"options":{"declaration":true,"module":2,"noEmitOnError":true,"outFile":"./dev-build.js"}},"version":"FakeTSVersion"}

//// [/user/username/projects/dev-build.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./noemitonerror/shared/types/db.ts",
      "./noemitonerror/src/main.ts",
      "./noemitonerror/src/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./noemitonerror/shared/types/db.ts": {
        "original": {
          "version": "-5014788164-export interface A {\n    name: string;\n}\n",
          "impliedFormat": 1
        },
        "version": "-5014788164-export interface A {\n    name: string;\n}\n",
        "impliedFormat": "commonjs"
      },
      "./noemitonerror/src/main.ts": {
        "original": {
          "version": "-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};",
          "impliedFormat": 1
        },
        "version": "-2574605496-import { A } from \"../shared/types/db\";\nconst a = {\n    lastName: 'sdsd'\n};",
        "impliedFormat": "commonjs"
      },
      "./noemitonerror/src/other.ts": {
        "original": {
          "version": "9084524823-console.log(\"hi\");\nexport { }\n",
          "impliedFormat": 1
        },
        "version": "9084524823-console.log(\"hi\");\nexport { }\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "./noemitonerror/shared/types/db.ts",
          "./noemitonerror/src/main.ts",
          "./noemitonerror/src/other.ts"
        ]
      ]
    ],
    "options": {
      "declaration": true,
      "module": 2,
      "noEmitOnError": true,
      "outFile": "./dev-build.js"
    }
  },
  "version": "FakeTSVersion",
  "size": 1059
}



Change:: no-change-run
Input::


Output::
/a/lib/tsc --b --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'tsconfig.json' is up to date because newest input 'src/main.ts' is older than output '../dev-build.tsbuildinfo'

exitCode:: ExitStatus.Success


