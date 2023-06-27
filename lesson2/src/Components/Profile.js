function Profile(props) {
    const { name, lastname} = props ;
    return <h1>Name : {name} {lastname}</h1>
    // console.log(props);
    // return <h1>Name : {props.name} {props.lastname} {props.children} </h1>
}
export default Profile;