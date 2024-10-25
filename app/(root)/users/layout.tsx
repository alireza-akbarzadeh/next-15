import {PropsWithChildren} from "react";

export default function DashboardLayout(props:PropsWithChildren) {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl">navbar</h1>
            <div>{props.children}</div>
        </div>
    );
}
