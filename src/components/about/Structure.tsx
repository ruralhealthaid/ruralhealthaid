import React from "react";
import styles from "./Structure.module.css";

const Structure = () => {
  return (
    <section id="structure" className={styles.wrapper}>
      <div className={styles["structure-funding"]}>
        <div className={styles.structure}>
          <h4>Organizational Structure</h4>
          <p>
            RHA is governed by a Board of Directors comprised of experts in
            public health, maternal and child health, non-profit management,
            finance, and community development. The day-today operations are
            overseen by an Executive Director, who leads a team of dedicated
            staff including healthcare professionals, community outreach
            coordinators, program managers, and administrative personnel working
            together to achieve our mission.
          </p>
        </div>
        <div className={styles.funding}>
          <h4>Funding and Support</h4>
          <p>
            We rely on a combination of grants, donations, and partnerships with
            governmental and nongovernmental organizations to fund our programs
            and services. Additionally, we actively seek support from
            philanthropic individuals and corporate sponsors who share our
            commitment to improving maternal and family health in rural
            communities. We are committed to financial transparency and
            accountability, ensuring that donor contributions are used
            efficiently and effectively to benefit the communities we serve.
          </p>
        </div>
      </div>

      <div className={styles.sustainability}>
        <h4>Sustainability</h4>
        <p>
          RHA is committed to building sustainable healthcare solutions by
          training local healthcare workers, empowering communities, and
          advocating for policy changes that support long-term health
          improvements.
        </p>
      </div>
    </section>
  );
};

export default Structure;
