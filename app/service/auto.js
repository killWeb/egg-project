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
        const shFilePath = `/work/wyb/project_files/${project}/sh/build.sh`;
        const findRes = sh.find(shFilePath);
        if (findRes.code) {
            return {
                code: findRes.code,
                stdout: findRes.stdout,
                stderr: findRes.stderr
            }
        }
        sh.chmod(755, shFilePath);
        const execRes = await execAsync(shFilePath);
        return {
            code: execRes.code,
            stdout: execRes.stdout,
            stderr: execRes.stderr
        }
    }
    async cd(req) {
        const { project } = req.query;
        if (!project) {
            return {
                stderr: "please set your project"
            }
        }
        const shFilePath = `/work/wyb/project_files/${project}/sh/deploy.sh`;
        const findRes = sh.find(shFilePath);
        if (findRes.code) {
            return {
                code: findRes.code,
                stdout: findRes.stdout,
                stderr: findRes.stderr
            }
        }
        sh.chmod(755, shFilePath);
        const execRes = await execAsync(shFilePath);
        return {
            code: execRes.code,
            stdout: execRes.stdout,
            stderr: execRes.stderr
        }
    }
}

module.exports = AutoService;
