import { ref, watch, onMounted } from "vue";
import api from "../../api/index";
import nextShoot from "../../assets/audio/nextShoot.mp3";
import prevShoot from "../../assets/audio/prevShoot.mp3";
import moreInfoSound from "../../assets/audio/showInfoSound.mp3";

export const useDemo = () => {
  const data = ref([]);
  const next = ref("");
  const prev = ref("");
  const selectedValid = ref("");

  onMounted(() => {
    api.get().then((res) => {
      data.value = res.data.results;
    });
  });

  const nextPage = () => {
    const nextShootAuido = new Audio(nextShoot);
    nextShootAuido.play();
    api.get(next.value).then((res) => {
      next.value = res.data.next;
      prev.value = res.data.previous;
      data.value = res.data.results;
    });
  };

  const prevPage = () => {
    const prevShootAuido = new Audio(prevShoot);
    prevShootAuido.play();
    api.get(prev.value).then((res) => {
      next.value = res.data.next;
      prev.value = res.data.previous;
      data.value = res.data.results;
    });
  };

  const moreInfo = (people) => {
    const showInfoSound = new Audio(moreInfoSound);
    showInfoSound.play();
    selectedValid.value = people;
    const moreInfoTimer = setTimeout(() => {
      selectedValid.value = "";
    }, 6000);
    return () => clearTimeout(moreInfoTimer);
  };

  return {
    nextPage,
    prevPage,
    moreInfo,
    data,
    selectedValid,
  };
};
