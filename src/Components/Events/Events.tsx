import styles from "./Events.module.css";
import data from "../../../data.json";

const Events = () => {
  // Reverse the array to show events from latest to oldest
  const reversedEvents = [...data.events].reverse();

  return (
    <div className={styles.events}>
      <h2>Our Event Journey</h2>
      <div className={styles.innerDiv}>
        {/* Large Main Event Card */}
        <div className={`${styles.card} ${styles.large}`}>
          <div className={styles.content}>
            <div className={styles.date}>
              <span>{reversedEvents[0].month}</span>
              <span>{reversedEvents[0].date}</span>
            </div>
            <div className={styles.text}>
              <strong>{reversedEvents[0].head}</strong>
              <span>{reversedEvents[0].para}</span>
            </div>
          </div>
          <img src={reversedEvents[0].img} alt="Main Event" />
        </div>

        {/* Scrollable Sub Events List */}
        <div className={styles.subContent}>
          {reversedEvents.slice(1).map((event, index) => (
            <div className={`${styles.card} ${styles.small}`} key={index}>
              <div className={styles.content}>
                <div className={styles.date}>
                  <span>{event.month}</span>
                  <span>{event.date}</span>
                </div>
                <div className={styles.text}>
                  <strong>{event.head}</strong>
                  <span>{event.para}</span>
                </div>
              </div>
              <img src={event.img} alt={`Event ${index + 2}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
