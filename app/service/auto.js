'use strict';

const Service = require('egg').Service;
const { execAsync } = require("../utils/index");
const sh = require("shelljs");

class AutoService extends Service {
    async ci(req) {
        const { project } = req.query;
        if (!project) {
            return {
                stderr: "please set your project"
            }
        }
        let shFilePath = "";
        if (process.env.NODE_ENV === "development") {
            shFilePath = `/Users/yibo.wei/pratice/${project}/sh/build.sh`;
        } else {
            shFilePath = `/work/wyb/project_files/${project}/sh/build.sh`;
        }
        const findRes = sh.find(shFilePath);
        if (findRes.code) {
            return {
                code: findRes.code,
                stdout: findRes.stdout,
                stderr: findRes.stderr
            }
        }
        sh.chmod(755, shFilePath);
        sh.cd(`/Users/yibo.wei/pratice/${project}`);
        try {
            const execRes = await execAsync("sh/build.sh");
            return {
                code: execRes.code,
                stdout: execRes.stdout,
                stderr: execRes.stderr
            }
        } catch (error) {
            console.log(error)
            return {
                stderr: error
            }
        }
    }
    async cd(req) {
        const { project } = req.query;
        if (!project) {
            return {
                stderr: "please set your project"
            }
        }
        let shFilePath = "";
        if (process.env.NODE_ENV === "development") {
            shFilePath = `/Users/yibo.wei/pratice/${project}/sh/deploy.sh`;
        } else {
            shFilePath = `/work/wyb/project_files/${project}/sh/deploy.sh`;
        }
        const findRes = sh.find(shFilePath);
        if (findRes.code) {
            return {
                code: findRes.code,
                stdout: findRes.stdout,
                stderr: findRes.stderr
            }
        }
        sh.chmod(755, shFilePath);
        sh.cd(`/Users/yibo.wei/pratice/${project}`);
        const execRes = await execAsync("sh/deploy.sh");
        return {
            code: execRes.code,
            stdout: execRes.stdout,
            stderr: execRes.stderr
        }
    }
}

module.exports = AutoService;
