import Triangle from './triangle.js';
import Point from './point.js';

// const Triangle = require('./triangle.js');
// const Point = require('./point.js');

const expect = chai.expect;

describe('Kiểm tra hàm tính khoảng cách giữa các điểm calDistance(a, b)', () => {
    it('Khoang cach bang 0 voi A(0; 0) B(0; 0)', () => {
        const A = new Point(0,0);
        const B = new Point(0,0);
        const result = Point.calDistance(A, B);
        expect(result).to.equal(0);
    });

    it('Khoang cach bang 1 voi A(1; 0) B(0; 0)', () => {
        const A = new Point(1,0);
        const B = new Point(0,0);
        const result = Point.calDistance(A, B);
        expect(result).to.equal(1);
    });

    it('Khoang cach bang 2.82842712474619 voi A(3; 4) B(5; 6)', () => {
        const A = new Point(3,4);
        const B = new Point(5,6);
        const result = Point.calDistance(A, B);
        expect(result).to.equal(2.82842712474619);  // kết quả có sai số do làm tròn
    });

    
    it('Khoang cach bang 3 voi A(2; 3) B(5; 3)', () => {
        const A = new Point(2,3);
        const B = new Point(5,3);
        const result = Point.calDistance(A, B);
        expect(result).to.equal(3);
    });

    it('Chuong trinh bao loi voi A(a; 3) B(5; 3)', () => {
        const A = new Point(a,3);
        const B = new Point(5,3);
        const result = Point.calDistance(A, B);
        expect(result).to.equal(3);
    });
});


describe('Kiểm tra hàm getType() của tam giác', () => {
    it('Không phải tam giác nếu A(0, 0)  B(0, 0) C(0, 0)', () => {
        const A = new Point(0,0);
        const B = new Point(0,0);
        const C = new Point(0,0);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day khong phai la tam giac");
    });


    it('Là tam giác vuông nếu A(0, 0)  B(1, 0) C(0, 2)', () => {
        const A = new Point(0,0);
        const B = new Point(1,0);
        const C = new Point(0,2);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day la tam giac vuong");  // kết quả có sai số do làm tròn
    });

    it('Là tam giác vuông nếu A(0, 0)  B(1, 0) C(0, 4)', () => {
        const A = new Point(0,0);
        const B = new Point(1,0);
        const C = new Point(0,4);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day la tam giac vuong");
    });

    it('Là tam giác cân nếu A(0, 0)  B(2, 0) C(0, 2)', () => {
        const A = new Point(0,0);
        const B = new Point(2,0);
        const C = new Point(0,2);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day la tam giac can");
    });

    it('Là tam giác đều nếu A(0, 0)  B(3,sqrt(27)) C(6, 0)', () => {
        const A = new Point(0,0);
        const B = new Point(3,Math.sqrt(27));
        const C = new Point(6,0);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day la tam giac deu");
    });

    it('Là tam giác tù nếu A(0, 0)  B(-3, 2) C(2, 0)', () => {
        const A = new Point(0,0);
        const B = new Point(-3,2);
        const C = new Point(2,0);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day la tam giac tu");
    });

    it('Là tam giác nhọn nếu A(0, 0)  B(3,4.5) C(6,1)', () => {
        const A = new Point(0,0);
        const B = new Point(3,4.5);
        const C = new Point(6,1);
        const triangle = new Triangle(A, B, C);
        const result_messsage = triangle.getType();
        expect(result_messsage).to.equal("Day la tam giac nhon");
    });

});

describe('Kiểm tra hàm calPerimeter() của tam giác', () => {

    it('Không thể tính chu vi tam giác nếu A(0, 0)  B(0, 0) C(0, 0)', () => {
        const A = new Point(0,0);
        const B = new Point(0,0);
        const C = new Point(0,0);
        const triangle = new Triangle(A, B, C);
        const result_perimeter = triangle.calPerimeter();
        expect(result_perimeter).to.equal(-1);
    });

    it('Chu vi tam giác bằng 5.23606797749979 nếu A(0, 0)  B(1, 0) C(0, 2)', () => {
        const A = new Point(0,0);
        const B = new Point(1,0);
        const C = new Point(0,2);
        const triangle = new Triangle(A, B, C);
        const result_perimeter = triangle.calPerimeter();
        expect(result_perimeter).to.equal(5.23606797749979);
    });

    it('Chu vi tam giác bằng 6.82842712474619 nếu A(0, 0)  B(2, 0) C(0, 2)', () => {
        const A = new Point(0,0);
        const B = new Point(2,0);
        const C = new Point(0,2);
        const triangle = new Triangle(A, B, C);
        const result_perimeter = triangle.calPerimeter();
        expect(result_perimeter).to.equal(6.82842712474619);
    });

    it('Chu vi tam giác bằng 18 nếu A(0, 0)  B(3,sqrt(27)) C(6, 0)', () => {
        const A = new Point(0,0);
        const B = new Point(3,Math.sqrt(27));
        const C = new Point(6,0);
        const triangle = new Triangle(A, B, C);
        const result_perimeter = triangle.calPerimeter();
        expect(result_perimeter).to.equal(18);
    });

    it('Chu vi tam giác bằng 10.990716082598494 nếu A(0, 0)  B(-3, 2) C(2, 0)', () => {
        const A = new Point(0,0);
        const B = new Point(-3,2);
        const C = new Point(2,0);
        const triangle = new Triangle(A, B, C);
        const result_perimeter = triangle.calPerimeter();
        expect(result_perimeter).to.equal(10.990716082598494);
    });
});