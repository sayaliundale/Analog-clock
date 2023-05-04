import TeamCard from "../components/TeamCard";
import teamsData from "../public/teamsData";
import Admindata from "../public/Admindata";
import styles from "../styles/Team.module.css";
export default function Team() {
  const admin = Admindata.map((admin) => {
    return (
      <div key={admin.id} className={styles.container1}>
        <TeamCard {...admin} />
      </div>
    );
  });
  const members = teamsData.map((member) => {
    return (
      <div key={member.id} className={styles.container}>
        <TeamCard {...member} />
      </div>
    );
  });
  return (
    <div>
      <div className={styles.container}>{admin}</div>
      <div className={styles.container}>{members}</div>
    </div>
  );
}
