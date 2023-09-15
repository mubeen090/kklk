jsx
import React from 'react';
import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import lessonsImg from "../../../../public/assets/courseCard/lessons.png";
import levelImg from "../../../../public/assets/courseCard/level.png";
import rating4Img from "../../../../public/assets/courseCard/rating4.png";
import studentsImg from "../../../../public/assets/courseCard/students.png";
import aiImg from "../../../../public/assets/courseCard/ai.png";
import mlImg from "../../../../public/assets/courseCard/ml.png";
import cybersecurityImg from "../../../../public/assets/courseCard/cybersecurity.png";
import devopsImg from "../../../../public/assets/courseCard/devops.png";
import oracleImg from "../../../../public/assets/courseCard/oracle.png";
import awsImg from "../../../../public/assets/courseCard/aws.png";
import javaImg from "../../../../public/assets/courseCard/java.png";

const CourseCard = ({ slug }) => {
  return (
    <>
      {/* Course cards on the home screen */}
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={aiImg}
            alt="Artificial Intelligence"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Artificial Intelligence</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 150+
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 4 mini, 4 major
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Basic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={mlImg}
            alt="Machine Learning"
            width={200}
            height={200}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Machine Learning</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 120
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 3 mini, 4 major
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Beginner to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={cybersecurityImg}
            alt="Cyber Security"
            width={200}
            height={200}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Cyber Security</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 120+
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 5 mini, 3 major
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Basic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={devopsImg}
            alt="DevOps"
            width={200}
            height={200}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn DevOps</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 140+
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 3 mini, 3 major
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Basic to Advanced
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
      {/* Course cards after exploring */}
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={oracleImg}
            alt="Oracle"
            width={200}
            height={200}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Oracle</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 1010+
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 4 major projects
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Basic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={awsImg}
            alt="AWS"
            width={200}
            height={200}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn AWS</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 180
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 4 mini, 4 major
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Beginner to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={javaImg}
            alt="Java"
            width={200}
            height={200}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Java</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessonsImg} alt="Lessons" />
            Lesson: 190
          </div>
          <div className={styles.stats}>
            <Image src={studentsImg} alt="Students" />
            Projects: 4 mini, 4 major
          </div>
          <div className={styles.stats}>
            <Image src={levelImg} alt="Level" />
            Basic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4Img} alt="Rating" />
        </div>
      </div>
    </>
  );
};

export default CourseCard;