// Saving this in a separate folder so cypress only needs to load this file
describe('Taking screenshots of voxel Mmdels', () => {
  for (let i = 777; i <= 777; i++) {
    it(`Screenshoot Trex #${i}`, () => {
      cy.visit(`http://localhost:1234/#${i}`);
      cy.wait(5000);
      cy.get('#viewer').should('be.visible');
      cy.screenshot(`${i}`, {
        clip: {
          x: 130,
          y: 0,
          height: 660,
          width: 660,
        },
      });
    });
  }
});
