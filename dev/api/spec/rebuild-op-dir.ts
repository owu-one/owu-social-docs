import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

const opsDir = './ops';
const swaggerPath = './spec/swagger.yaml';
const swaggerContent = fs.readFileSync(swaggerPath, 'utf8');
const mdTemplatePath = './spec/op.md.template';
const jsTemplatePath = './spec/op.paths.js.template';

if (fs.existsSync(opsDir)) {
    console.log('Removing existing operation directories and files...');
    fs.rmSync(opsDir, { recursive: true, force: true });
}
fs.mkdirSync(opsDir);

const swaggerDoc = yaml.load(swaggerContent) as any;
const paths = swaggerDoc.paths;

console.log('Rebuilding operation directories and files...');
for (const pathKey in paths) {
    const methods = paths[pathKey];
    for (const methodKey in methods) {
        const operation = methods[methodKey];
        const operationId = operation.operationId;
        const summary = operation.summary;

        if (operationId) {
            console.log(`${operationId} - ${summary}`);
            const mdDestPath = path.join(opsDir, `${operationId}.md`);
            // const jsDestPath = path.join(opsDir, `${operationId}.paths.js`);

            fs.copyFileSync(mdTemplatePath, mdDestPath);
            // fs.copyFileSync(jsTemplatePath, jsDestPath);

            let mdContent = fs.readFileSync(mdDestPath, 'utf8');
            mdContent = mdContent.replace('REPLACEME_OP_TITLE', summary);
            mdContent = mdContent.replace('REPLACEME_OP_ID', operationId);
            fs.writeFileSync(mdDestPath, mdContent, 'utf8');
        }
    }
}

console.log('Operation directories and files have been rebuilt.');