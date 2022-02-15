import React from 'react';
import {View} from 'react-native';

type ReactChildArray = ReturnType<typeof React.Children.toArray>;
function flattenChildren(children: React.ReactNode): ReactChildArray {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.reduce((flatChildren: ReactChildArray, child) => {
        if ((child as React.ReactElement<any>).type === React.Fragment) {
            return flatChildren.concat(flattenChildren((child as React.ReactElement<any>).props.children));
        }
        flatChildren.push(child);
        return flatChildren;
    }, []);
}

const getSpacedChildren = (children: JSX.Element[] | JSX.Element, space: number = 0, axis: 'X' | 'Y'): any => {
    let childrenArray = React.Children.toArray(flattenChildren(children));

    childrenArray = childrenArray.map((child: any, index: number) => {
        return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
                {child}
                {index < childrenArray.length - 1 && <View style={axis === 'X' ? {width: space} : {height: space}} />}
            </React.Fragment>
        );
    });

    return childrenArray;
};

export {getSpacedChildren};
