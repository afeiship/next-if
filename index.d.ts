type Condition = () => boolean | boolean;

interface NxStatic {
    if: (cond: Condition, truthy: any, falsy?: any) => any;
}
