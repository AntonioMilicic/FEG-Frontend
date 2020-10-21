export const registerDialog = {
  methods: {
    registerDialog(id, inModal = false) {
      this.$modal.show('dialog', {
        title: 'Please confirm your registration',
        text: 'To enter the tournament, you have to confirm your application.',
        buttons: [
          {
            title: 'Confirm',
            handler: () => {
              this.submitIdHandler(id, inModal);
              this.$modal.hide('dialog');
            }
          },
          {
            title: 'Cancel',
            handler: () => { this.$modal.hide('dialog'); }
          }
        ]
      });
    },
    submitIdHandler(id, inModal) {
      const submittedId = Math.floor((Math.random() * 10000) + 1);
      this.$store.dispatch('submitPlayerId',
        { activeGameId: id, playerId: submittedId });
      if (inModal) this.game.playerId = submittedId;
    }
  }
};
