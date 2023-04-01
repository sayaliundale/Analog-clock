import TeamCard from "../components/TeamCard";
import teamsData from "../public/teamsData";
import Admindata from "../public/Admindata";
import styles from "../styles/Team.module.css";
export default function Team() {
  const admin = Admindata.map((admin) => {
    return (
      <div className={styles.container1}>
        <TeamCard key={admin.id} {...admin} />
      </div>
    );
  });
  const members = teamsData.map((member) => {
    return (
      <>

      <div className={styles.container}>
        <TeamCard key={member.id} {...member} />
      </div>


      </>
    );
  });
  return <div><div className={styles.container}>{admin}</div><div className={styles.container}>{members}</div></div>;
}
