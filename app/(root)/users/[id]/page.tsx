export default async function UserDetails({params}: {params: {id:string}}) {
    const {id} = await params
    return (
        <div>User Details {id}</div>
    );
}
