import LightVehicleIcon from "@/assets/icons/light-vehicle.png";
import MotorIcon from "@/assets/icons/motor-icon.png";
import LightMachineryIcon from "@/assets/icons/light-machinery.png";
import HeavyVehicleIcon from "@/assets/icons/heavy-vehicle.png";
import HeavyMachineryIcon from "@/assets/icons/heavy-machinery.png";
import BusIcon from "@/assets/icons/bus-icon.png";
import CourseItem from "./course-item";
import styles from "./section.module.css";

function CoursesSection() {
  const courses = [
    {
      id: 1,
      name: "Light Vehicle",
      icon: LightVehicleIcon,
    },
    {
      id: 2,
      name: "Heavy Vehicle",
      icon: HeavyVehicleIcon,
    },
    {
      id: 3,
      name: "Heavy Bus",
      icon: BusIcon,
    },
    {
      id: 4,
      name: "Light Machinery",
      icon: LightMachineryIcon,
    },
    {
      id: 5,
      name: "Heavy Machinery",
      icon: HeavyMachineryIcon,
    },
    {
      id: 6,
      name: "Motorcycle",
      icon: MotorIcon,
    },
  ];

  return (
    <div>
      <p className={styles.sectionTitle}>Our Courses</p>
      <div className={styles.boxContainer}>
        {courses.map((course) => (
          <CourseItem imageSrc={course.icon} text={course.name}></CourseItem>
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;
