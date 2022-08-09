#! /usr/bin/env node

const program = require("commander");
const process = require("child_process");

// version 版本号
// name 新项目名称

program.version("1.0.0")
    .command("create <name>")
    .action((name) => {
        console.log("正在创建项目模板...");
        process.exec("git clone https://github.com/pengqiang324/zanyou-template.git " + name, function(err, stdout, stderr) {
            if (err !== null) {
                console.log("exec error:" + err);
                return;
            }
            console.log(stdout);
            console.log("项目模板创建成功");
        });
    });

program.parse(process.argv);