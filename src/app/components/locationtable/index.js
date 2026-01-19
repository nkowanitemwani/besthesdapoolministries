import React from "react";
import styles from "./locationtable.module.css"
import Button from "../button";

export default function LocationTable(){
    return(
    <div className={styles.tableContainer}>  
        <table className={styles.locationTable}>
            <thead>
            <tr>
                <th>Location</th>
                <th>City</th>
                <th>Service times</th>
                <th>Contact</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                <div className={styles.locationName}>Ship Gate Center</div>
                <div className={styles.locationDetail}>Kitwe West </div>
                </td>
                <td>Kitwe</td>
                <td>
                <span className={styles.serviceTime}>Sun - 07:00</span>
                <span className={styles.serviceTimeGray}>Wed - 18:00</span>
                </td>
                <td>
                <Button className={styles.directionsButton}>Get directions</Button>
                </td>
            </tr>
            <tr>
                <td>
                <div className={styles.locationName}>Ship Gate Center North</div>
                <div className={styles.locationDetail}>Riverside</div>
                </td>
                <td>Kitwe</td>
                <td>
                <span className={styles.serviceTime}>Sun - 08:30</span>
                <span className={styles.serviceTimeGray}>Thu - 18:00</span>
                </td>
                <td>
                <Button className={styles.directionsButton}>Get directions</Button>
                </td>
            </tr>
            <tr>
                <td>
                <div className={styles.locationName}>Ship Gate Center Lusaka</div>
                <div className={styles.locationDetail}>Kablonga</div>
                </td>
                <td>Lusaka</td>
                <td>
                <span className={styles.serviceTime}>Sun - 09:30</span>
                <span className={styles.serviceTimeGray}>Thu - 18:00</span>
                </td>
                <td>
                <Button className={styles.directionsButton}>Get directions</Button>
                </td>
            </tr>
            <tr>
                <td>
                <div className={styles.locationName}>Ship Gate Center Ndola</div>
                <div className={styles.locationDetail}>City center</div>
                </td>
                <td>Ndola</td>
                <td>
                <span className={styles.serviceTime}>Sun - 10:00</span>
                <span className={styles.serviceTimeGray}>Fri - 17:30</span>
                </td>
                <td>
                <Button className={styles.directionsButton}>Get directions</Button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    );
}