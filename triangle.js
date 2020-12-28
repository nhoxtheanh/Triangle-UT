import Point from "./point.js";

export default class Triangle {
  constructor(point1, point2, point3) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
  }

  getType() {
    const pa = Point.calDistance(this.point1, this.point2);
    const pb = Point.calDistance(this.point2, this.point3);
    const pc = Point.calDistance(this.point1, this.point3);
    let message = "";

    if (pb + pc > pa && pa + pb > pc && pa + pc > pb) {
      if (
        pa * pa == pb * pb + pc * pc ||
        pb * pb == pa * pa + pc * pc ||
        pc * pc == pa * pa + pb * pb
      )
        message = "Day la tam giac vuong";
      else if (pa == pb && pb == pc) message = "Day la tam giac deu";
      else if (pa == pb || pa == pc || pb == pc)
        message = "Day la tam giac can";
      else if (
        pa * pa > pb * pb + pc * pc ||
        pb * pb > pa * pa + pc * pc ||
        pc * pc > pa * pa + pb * pb
      )
        message = "Day la tam giac tu";
      else message = "Day la tam giac nhon";
    } else message = "Day khong phai la tam giac";

    return message;
  }

  calPerimeter() {
    const type = this.getType();
    if (type === "Day khong phai la tam giac") return -1;
    else {
      const pa = Point.calDistance(this.point1, this.point2);
      const pb = Point.calDistance(this.point2, this.point3);
      const pc = Point.calDistance(this.point1, this.point3);
      return pa + pb + pc;
    }
  }
}

// export const isOddNumber = (number) => number % 2 === 1;

// export const countEvenNumbers = (numberList) => {
//   return numberList.filter((x) => x % 2 === 0).length;
// };
