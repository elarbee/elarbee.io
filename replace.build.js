// https://www.bilyachat.com/blog/angular-2-build-version
const replace = require('replace-in-file');
const package = require("./package.json");
const { exec } = require('child_process');

const buildVersion = package.version;
let options = {
    files: 'src/environments/environment.prod.ts',
    from: /version: .*,/g,
    to: "version: '"+ buildVersion + "'" + ',',
    allowEmptyPaths: false,
};

try {
    let changedFiles = replace.sync(options);
    if (changedFiles == 0) {
        throw "Please make sure that file '" + options.files + "' has \"version: ''\"";
    }
    console.log('Build version set: ' + buildVersion);
}
catch (error) {
    console.error('Error occurred:', error);
    throw error
}


exec('date', (err, stdout, stderr) => {
    if (err) {
        return;
    }

    const current_date = stdout.slice(0,-1);

    options = {
        files: 'src/environments/environment.prod.ts',
        from: /build_date: '(.*)'/g,
        to: "build_date: '"+ current_date + "'",
        allowEmptyPaths: false,
    }


    try {
        let changedFiles = replace.sync(options);
        if (changedFiles == 0) {
            throw "Please make sure that file '" + options.files + "' has \"build_date: ''\"";
        }
        console.log('Build date set: ' + current_date);
    }
    catch (error) {
        console.error('Error occurred:', error);
        throw error
    }
});

