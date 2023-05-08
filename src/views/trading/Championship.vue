<template>
  <div class="champion">
    <div v-show="isShowDetail === -1">
      <section class="banner">
        <div class="content">
          <img src="@/assets/images/landing_v2/icon-cup.png" />
          <div class="title">Tournaments</div>
          <div class="description">Join and win great prizes.</div>
        </div>
      </section>

      <section class="wrapper-list-championship">
        <div class="list-championship">
          <div class="title">
            <img src="@/assets/images/landing_v2/icon-fire.png" />
            <div class="breakcrumb">
              Tournaments
              <span>/ finished </span>
            </div>
          </div>

          <div class="cards-list">
            <Card
              v-for="(champion, ind) in champions"
              :key="champion.id"
              @clicked="openDetail(ind)"
              :data="champion"
            />
          </div>
        </div>
      </section>
    </div>
    <section v-if="isShowDetail !== -1">
      <Detail
        @goBack="toggleShowDetail(-1)"
        @update="updateChampions"
        :champion="champions[isShowDetail]"
      />
    </section>
  </div>
</template>

<script>
import Card from "@/views/components/championship/home/list.vue";
import Detail from "@/views/components/championship/home/detail.vue";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      isShowDetail: -1,
      champions: [],
    };
  },
  methods: {
    toggleShowDetail(indDetail) {
      this.isShowDetail = indDetail;
    },
    openDetail(ind) {
      this.toggleShowDetail(ind);
      window.scrollTo(0, 0);
    },
    updateChampions() {
      AuthenticationService.getChampionsClient().then((resp) => {
        this.champions = resp.data.data;
      });
    },
  },
  components: {
    Card,
    Detail,
  },
  created() {
    AuthenticationService.getChampionsClient().then((resp) => {
      this.champions = resp.data.data;
    });
  },
};
</script>

<style scoped lang="scss">
.banner {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("~@/assets/images/landing_v2/banner-league.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 484px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 110px;
  padding-bottom: 110px;
  padding-left: 93px;
  position: relative;
  transition: all 0.3s linear 0s;
  @media only screen and (max-width: 490px) {
    padding-left: 20px;
  }

  img {
    width: 55px !important;
    height: 59px !important;
    margin-bottom: 10px;
  }

  .title {
    font-size: 68px;
    font-weight: 700;
    line-height: 1.3;
    color: #eec40d;
  }

  .description {
    font-size: 26px;
    color: #fff;
    max-width: 480px;
    line-height: normal;
  }
}

.wrapper-list-championship {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 546px);
  padding: 62px 93px 0;
  @media only screen and (max-width: 490px) {
    padding: 40px 20px 0;
  }
}

.list-championship {
  .title {
    margin-bottom: 44px;
    align-items: center !important;
    display: flex;
    img {
      margin-right: 1rem !important;
    }

    .breakcrumb {
      font-size: 40px;
      color: #fff;
      font-weight: 700;
      span {
        font-size: 18px;
        color: #69696c;
      }
    }
  }
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
