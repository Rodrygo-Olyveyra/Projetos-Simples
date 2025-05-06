const detailsList = document.querySelectorAll("details");
    detailsList.forEach(detail => {
      const icon = detail.querySelector(".toggle-icon");
      detail.addEventListener("toggle", () => {
        if (detail.open) {
          icon.src = "/FAQ/assets/images/icon-minus.svg";
        } else {
          icon.src = "/FAQ/assets/images/icon-plus.svg";
        }
      });
    });