import TeamCard from "../components/TeamCard";
import teamsData from "../public/teamsData";
import styles from "../styles/Team.module.css";
export default function Team() {
  const members = teamsData.map((member) => {
    return (
      <>
      <div className={styles.blurBg}></div>
      <div className={styles.container}>
        <TeamCard key={member.id} {...member} />
      </div>
      <div className={styles.blurBg2}></div>
      </>
    );
  });
  return <div className={styles.container}>{members}</div>;
}
