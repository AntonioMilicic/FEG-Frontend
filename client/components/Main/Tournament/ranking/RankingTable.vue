<template>
  <div class="ranking-table">
    <div class="ranking-title flex-h justify-center py-s">
      <font-awesome-icon icon="trophy" class="ranking-title-icon" />
      <span class="pl-xxs">RANKING</span>
    </div>
    <div class="table-content">
      <table class="table-content-table">
        <tr>
          <th></th>
          <th>Username</th>
          <th>Points</th>
          <th>Prize</th>
        </tr>
        <tr
          v-for="{ rank, username, score, prize } in ranking"
          :key="username"
          :class="{marked: rank === userRank}"
          class="row-data">
          <td>
            <span
              :class="{
                gold: rank === 1,
                silver: rank === 2,
                bronze: rank === 3,
                user: rank === userRank
              }">
              {{ rank }}
            </span>
          </td>
          <td>{{ username | maskName }}</td>
          <td>{{ score }}</td>
          <td>{{ prize | currency }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ranking-table',
  props: {
    gameState: { type: String, required: true },
    ranking: { type: Object, required: true },
    userRank: { type: Number, default: null }
  },
  filters: {
    maskName: name => {
      const maskChar = '*';
      const maskStart = Math.floor(name.length / 2) - 1;
      const maskEnd = maskStart + Math.floor(name.length / 2);
      const masked = name.split('').map((char, index) => {
        if (index >= maskStart && index < maskEnd) return maskChar;
        return char;
      });
      return masked.join('');
    },
    currency: value => {
      if (!isNaN(value)) return value + ' ' + 'Kn';
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
.ranking-title {
  color: var(--color-gray-light-100);

  &-icon {
    color: var(--color-gold);
  }
}

.table-content {
  width: 100%;

  &-table {
    border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    width: 100%;
    color: var(--color-gray-light-200);

    th {
      height: 2.5rem; // Koristit var
      border-top: solid 2px var(--color-gray-light-300); // Koristit var za px
      border-bottom: solid 2px var(--color-gray-light-300);
    }

    td {
      height: 2.5rem;
      border-bottom: solid 2px var(--color-gray-light-300);
    }

    th:first-child {
      width: 3rem;
    }

    th:nth-child(2),td:nth-child(2) {
      text-align: left;
    }

    th:nth-child(3),td:nth-child(3) {
      padding-right: var(--spc-xl);
    }

    td:nth-child(3) {
      color: var(--color-gray-light-100);
    }

    th:last-child,td:last-child {
      text-align: center;
      padding-left: 5rem;
    }

    .medal {
      padding: 0 0.3125rem;
      border-radius: var(--border-radius-l);
      color: var(--color-black-100);
    }

    .gold {
      @extend .medal;

      background-color: var(--color-gold);
    }

    .silver {
      @extend .medal;

      background-color: var(--color-silver);
    }

    .bronze {
      @extend .medal;

      background-color: var(--color-bronze);
    }

    .user {
      padding: 0 0.3125rem; // Koristit var
      border-radius: var(--border-radius-l);
      border: 2px solid var(--color-white);
    }

    .marked {
      color: var(--color-white);
      background-color: var(--color-accent);
    }
  }
}
</style>
