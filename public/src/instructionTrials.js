// Erste Instruktionen
const CBC_VPNNummer = {
  type: jsPsychSurveyHtmlForm,
  preamble: ``,
  html: `
    <div class="survey-container">
    <p>Probandennummer</p>
    <input type="number" id="Probandennummer" name="Probandennummer" required class="input-field"/>

    <p> Heutiges Datum</p>
    <input type="date" id="Heutiges-Datum" name="Heutiges-Datum" required class="input-field"/>

    <p> Name der Messperson</p>
    <input type="text" id="Name-der-Messperson" name="Name-der-Messperson" required class="input-field"/>
  
</div>
    
`,
  on_finish: function (data) {
    const responses = data.response;
    settingsDone = true;
  },
};

const breakInstructions = {
  type: jsPsychInstructions,
  pages: [
    `<div class="instructions">
          Bitte wenden Sie sich an die Versuchsleitung
      </div>`,
  ],
  show_clickable_nav: true,
  button_label_next: "Weiter",
  allow_backward: false,
};
