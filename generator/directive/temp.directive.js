class <%= upCaseName %>Directive {
    constructor() {
        "ngInject";
        this.restrict = 'A';
        this.scope = {}
    }
    
    link = ($scope, $element, $attrs) => {
        console.log($scope, $element, $attrs);
    };
}

export default <%= upCaseName %>Directive;