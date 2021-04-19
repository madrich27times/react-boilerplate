module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'create a new React component',
        propmts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name your React component',
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/components/{{name}}',
                templateFiles: 'plop-templates/component/*.hbs',
                base: 'plop-templates/component',
            },
        ],
    });
};
