<template>
  <section class="bg0 p-t-104 p-b-116">
    <div class="container">
      <div class="flex-w flex-tr">
        <div class="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
          <form>
            <h4 class="mtext-105 cl2 txt-center p-b-30">
              Informations personnelles
            </h4>
            <div class="flex-w w-full p-b-42">
              <span class="fs-18 cl5 txt-center size-211">
                <span class="lnr lnr-map-marker"></span>
              </span>
              <input
                class="form-control"
                type="number"
                placeholder="Numéro de téléphone"
                aria-label="default input example"
              />
            </div>

            <div class="flex-w w-full p-b-42">
              <span class="fs-18 cl5 txt-center size-211">
                <span class="lnr lnr-map-marker"></span>
              </span>
              <input
                class="form-control"
                type="date"
                placeholder="Date de naissance"
                aria-label="default input example"
              />
            </div>

            <div class="flex-w w-full p-b-42">
              <span class="fs-18 cl5 txt-center size-211">
                <span class="lnr lnr-map-marker"></span>
              </span>
              <input
                class="form-control"
                type="text"
                placeholder="Pays de naissance"
                aria-label="default input example"
              />
            </div>

            <div class="flex-w w-full p-b-42">
              <span class="fs-18 cl5 txt-center size-211">
                <span class="lnr lnr-map-marker"></span>
              </span>
              <input
                class="form-control"
                type="text"
                placeholder="Nationalité"
                aria-label="default input example"
              />
            </div>

            <div class="flex-w w-full p-b-42">
              <span class="fs-18 cl5 txt-center size-211">
                <span class="lnr lnr-map-marker"></span>
              </span>
              <input
                class="form-control"
                type="text"
                placeholder="Adresse du domicile"
                aria-label="default input example"
              />
            </div>

            <div class="flex-w w-full p-b-42">
              <span class="fs-18 cl5 txt-center size-211">
                <span class="lnr lnr-map-marker"></span>
              </span>
              <input
                class="form-control"
                type="text"
                placeholder="Ville"
                aria-label="default input example"
              />
            </div>
            <button
              class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
            >
              Envoyer
            </button>
          </form>
        </div>

        <div
          class="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md"
        >
          <h4 class="mtext-105 cl2 txt-center p-b-30">
            Type d'identification
          </h4>
          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="cni"
              />
              <label class="form-check-label" for="inlineCheckbox1">CNI</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="passport"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >PASSPORT</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="permi de conduire"
              />
              <label class="form-check-label" for="inlineCheckbox3"
                >Permi</label
              >
            </div>
          </div>

          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <input
              class="form-control"
              type="text"
              placeholder="ID de carte choisie"
              aria-label="default input example"
            />
          </div>

          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="ecole"
              />
              <label class="form-check-label" for="inlineRadio1">École</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2"
                >Université</label
              >
            </div>
          </div>

          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <input
              class="form-control"
              type="text"
              placeholder="Nom de l'établissement"
              aria-label="default input example"
            />
          </div>

          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <input
              class="form-control"
              type="text"
              placeholder="Option"
              aria-label="default input example"
            />
          </div>


          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <input
              class="form-control"
              type="text"
              placeholder="Classe"
              aria-label="default input example"
            />
          </div>

          <div class="flex-w w-full p-b-42">
            <span class="fs-18 cl5 txt-center size-211">
              <span class="lnr lnr-map-marker"></span>
            </span>
            <input
              class="form-control"
              type="text"
              placeholder="Ville"
              aria-label="default input example"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style></style>
