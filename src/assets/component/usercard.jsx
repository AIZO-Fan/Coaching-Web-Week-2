const UserCard = (props) => {
    const { nama, NPM ,git } = props;
   
    return(
        <div>
    <ul style={{ listStyleType: "disc", }}>
        <li><strong>Nama :</strong> {nama}</li>
        <li><strong>Npm   :</strong> {NPM}</li>
        <li><strong>github   :</strong> <a href="https://github.com/AIZO-Fan?tab=repositories"> {git}</a></li>
    </ul>

        </div>
    )
}
export default UserCard;