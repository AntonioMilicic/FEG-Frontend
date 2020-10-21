export const showModal = {
  methods: {
    showModal(RankingModal, props) {
      let width = window.screen.width;
      if (window.screen.width === 768) width = 500;
      if (window.screen.width > 768) width = 600;

      this.$modal.show(
        RankingModal,
        { ...props },
        {
          name: 'tournament',
          height: 'auto',
          width,
          delay: '100',
          shiftY: 0,
          scrollable: true
        }
      );
    }
  }
};
