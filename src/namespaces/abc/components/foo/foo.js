import { concatClassnames } from "./helper/classname.js";

export default class Bar {
    @prop x;
    @prop y = 0;

    get computedClasses() {
        return concatClassnames('slds-list-item', 'item-' + this.y);
    }

    handleClick() {
        console.log('<li> was clicked');
    }



    // IMPORTANT: after this line, all code is generated by the build process
    // this is a generated method based on the template
    render({h,m}) {
        const m0 = m(0, () => this.handleClick(...arguments));
        return h('li', {
            props: { class: this.computedClasses },
            on: { click: m0 },
        }, ['Value of X = ', this.x]);
    }
}

// Example of usage:
// <Foo x="5" />
// and optional argument y, which defauls to 0
