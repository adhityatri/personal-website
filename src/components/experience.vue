<script setup lang="ts">
import { ref } from "vue";
import { experience } from "../types/experiences";

const list = ref<experience[]>([
  {
    logo: "gramedia.webp",
    name: "PT. Gramedia Asri Media",
    companyName: "PT. Gramedia Asri Media",
    role: "Front-End Developer",
    periode: "June 2022 - Present",
    workDescription:
      "<ul class='work-list'>" +
      "<li>Developed & Maintenance Mitra and Billing Gramedia Web Application</li>" +
      "<li>Developed and Maintaining Mitra Gramedia and Billing Gramedia Web Application</li>" +
      "<li>Collaborate with cross-functional teams in delivering customer-centric tech products and services.</li>" +
      "<li>Ship a high quality code and result with minimum bug deployed to production</li>" +
      "<li>Optimizing images by reducing the file size of an image by 79%.</li>" +
      "</ul>",
  },
  {
    logo: "infoglobal.svg",
    name: "PT. Infoglobal AutOptima",
    companyName: "PT. Infoglobal AutOptima",
    role: "Programmer",
    periode: "Dec 2013 - May 2022",
    workDescription:
      "<ul class='work-list'>" +
      "<li>Developed a custom UI library that increased developer productivity and code reuse</li>" +
      "<li>Developed a custom UI/UX design that improved user engagement</li>" +
      "<li>Developed an attractive and user-friendly design to facilitate users in reading and understanding the presented information.</li>" +
      "<li>Optimized all internal applications for maximum speed and scalability</li>" +
      "<li>Deploying all applications to the server</li>" +
      "<li>Worked with graphic designer, back-end developer teams to create applications</li>" +
      "<li>Optimized query performance, resulting in a 83% decrease in response time for end users.</li>" +
      "<li>Developed an application using java language (using vaadin as an UI and tapestry as a framework) and some application was created using oracle BPM and PapiWs.</li>" +
      "</ul>",
  },
]);
</script>

<template>
  <div class="container experience">
    <img class="pattern" src="/pattern2.png" alt="pattern-2" />
    <h1>Work <br />Experiences</h1>
    <div class="experience-body">
      <div v-for="(item, index) in list" :key="index" class="card-experience latest">
        <div class="left">
          <img :src="`/${item.logo}`" alt="" />
          <span class="cName">{{ item.companyName }}</span>
          <p>{{ item.periode }}</p>
        </div>
        <div class="right">
          <span class="role">{{ item.role }}</span>

          <div v-html="item.workDescription" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  min-height: 80vh;
  box-shadow: -4px -26px 40px 0 transparentize($color: #000000, $amount: 0.9);
  z-index: 2;
  background-color: $based-color;
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;

  &-body {
    padding-top: 3rem;
  }
}

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  line-height: 4rem;
}

.describe {
  width: 90%;
  font-size: 1.5rem;
}

.pattern {
  position: absolute;
  left: 2%;
  top: 8rem;
  width: 12rem;
  z-index: -1;

  @media (1024px <= width <= 1366px) {
    left: 10%;
  }

  @media (width >= 1367px) {
    left: 17%;
  }
}

.card-experience {
  background: linear-gradient(120deg, $based-color 25%, white);
  width: 100%;
  z-index: 1;
  border: 2px solid white;
  border-radius: 1rem;
  margin-bottom: 3rem;
  padding: 4rem;
  display: flex;
  gap: 2rem;

  .left {
    width: 250px;
    display: flex;
    flex-direction: column;
    img {
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 10px 10px 20px #dedede, -10px -10px 20px #ffffff;
      border: 2px solid white;
      border-radius: 1rem;
      width: 112px;
    }
    .cName {
      font-weight: bold;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      color: $text-color;
    }

    p {
      color: $text-color-secondary;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .role {
    font-weight: bold;
    color: $primary-color;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: right;
    // border-bottom: 3px solid ;
    text-decoration: underline wavy 3px;
  }
}

::v-deep .work-list {
  list-style-type: circle;
  font-size: 1.1rem;
  line-height: 2rem;
  text-align: justify;
}
</style>
