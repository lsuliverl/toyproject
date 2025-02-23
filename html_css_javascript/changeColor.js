const titleColor = {
    setColor: function (color) {
        const title = document.getElementsByClassName("title");
        for (let i = 0; i < title.length; i++) {
            title[i].style.color = color;
        }
    },
};

const textColor = {
    setColor: function (color) {
        const text = document.getElementsByClassName("text");
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = color;
        }
    },
};

function greenColor(self) {
    if (self.value === "초록색") {
        titleColor.setColor("green");
        textColor.setColor("green");
        self.value = "검정색";
    } else {
        titleColor.setColor("black");
        textColor.setColor("black");
        self.value = "초록색";
    }
}
