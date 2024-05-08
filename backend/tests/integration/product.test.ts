import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { app } from '../../src/app';
import { productMock } from '../mocks/product.mock';
import { SequelizeProduct } from '../../src/database/models/SequelizeProduct';

const { expect } = chai;

chai.use(chaiHttp);

describe('Integration testing for Products', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('Get All Products', () => {
    it('should return all products', async () => {
      // arrange
      sinon.stub(SequelizeProduct, 'findAll').resolves(productMock as any);

      // act
      const { status, body } = await chai.request(app).get('/product');

      // assert
      expect(status).to.equal(200);
      expect(body).deep.equal(productMock);
      expect(body).to.be.an('array');
      expect(body.length).to.be.greaterThan(0);
    });
  });

  describe('Get Product By Id', () => {
    it('should return a product by id', async () => {
      // arrange
      sinon.stub(SequelizeProduct, 'findOne').resolves(productMock[0] as any);

      // act    
      const { status, body } = await chai.request(app).get('/product/1');

      // assert
      expect(status).to.equal(200);
      expect(body).deep.equal(productMock[0]);
      expect(body).to.be.an('object');
    });

    it('should return 404 if product not found', async () => {
      // arrange
      sinon.stub(SequelizeProduct, 'findOne').resolves(null);

      // act
      const { status, body } = await chai.request(app).get('/product/4');
      
      // assert
      expect(status).to.equal(404);
      expect(body).to.be.an('object');
      expect(body).to.have.property('message');
      expect(body.message).to.equal('Product not found');
    });
  });

  describe('Create Product', () => {
    it('should create a new product', async () => {
      // arrange
      const newProduct = {
        name: 'Xiaomi Redmi 19',
        price: 899,
        priceId: 'price_1L',
        quantity: 200,
        image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp',
      };

      const mockReturn = SequelizeProduct.build(newProduct as any);
      sinon.stub(SequelizeProduct, 'findOne').resolves(null);
      sinon.stub(SequelizeProduct, 'create').resolves(mockReturn);

      // act
      const { status, body } = await chai.request(app).post('/product').send(newProduct);
      
      // assert
      expect(status).to.equal(201);
      expect(body).to.be.an('object');
      expect(body).to.have.property('id');
      expect(body).to.have.property('name');
      expect(body).to.have.property('price');
      expect(body).to.have.property('priceId');
      expect(body).to.have.property('quantity');
      expect(body).to.have.property('image');
    });

    it('should return 500 if an error occurs', async () => {
      // arrange
      const newProduct = {
        name: 'Xiaomi Redmi 12',
        price: 399,
        priceId: 'price_1PDR0VGl8SYs9Zeb8njkL6BL',
        quantity: 20,
        image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp',
      };

      sinon.stub(SequelizeProduct, 'findOne').resolves(null);
      sinon.stub(SequelizeProduct, 'create').resolves(null as any);

      // act
      const { status, body } = await chai.request(app).post('/product').send(newProduct);

      // assert
      expect(status).to.equal(500);
      expect(body).to.be.an('object');
      expect(body).to.have.property('message');
      expect(body.message).to.equal('Failed to create product');
    });
  });

  describe('Update Product', () => {
    it('should update a product', async () => {
      // arrange
      const updatedProduct = {
        name: 'Xiaomi Redmi 12',
        price: 399,
        priceId: 'price_1PDR0VGl8SYs9Zeb8njkL6BL',
        quantity: 20,
        image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp',
      };

      const mockReturn = SequelizeProduct.build(updatedProduct as any);
      sinon.stub(SequelizeProduct, 'findOne').resolves(mockReturn);
      sinon.stub(SequelizeProduct, 'update').resolves([mockReturn] as any);

      // act
      const { status, body } = await chai.request(app).put('/product/1').send(updatedProduct);

      // assert
      expect(status).to.equal(200);
      expect(body).to.be.an('object');
      expect(body).to.have.property('id');
      expect(body).to.have.property('name');
      expect(body).to.have.property('price');
      expect(body).to.have.property('priceId');
      expect(body).to.have.property('quantity');
      expect(body).to.have.property('image');
    });

    it('should return 404 if product not found', async () => {
      // arrange
      const updatedProduct = {
        name: 'Xiaomi Redmi 12',
        price: 399,
        priceId: 'price_1PDR0VGl8SYs9Zeb8njkL6BL',
        quantity: 20,
        image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp',
      };

      sinon.stub(SequelizeProduct, 'findOne').resolves(null);

      // act
      const { status, body } = await chai.request(app).put('/product/4').send(updatedProduct);

      // assert
      expect(status).to.equal(404);
      expect(body).to.be.an('object');
      expect(body).to.have.property('message');
      expect(body.message).to.equal('Product not found');
    });
  });

  describe('Delete Product', () => {
    it('should delete a product', async () => {
      // arrange
      const mockReturn = SequelizeProduct.build(productMock[0] as any);
      sinon.stub(SequelizeProduct, 'findOne').resolves(mockReturn);
      sinon.stub(SequelizeProduct, 'destroy').resolves(true as any);

      // act
      const { status, body } = await chai.request(app).delete('/product/1');

      // assert
      expect(status).to.equal(200);
      expect(body).to.be.an('boolean');
      expect(body).to.equal(true);
    });

    it('should return 404 if product not found', async () => {
      // arrange
      sinon.stub(SequelizeProduct, 'findOne').resolves(null);

      // act
      const { status, body } = await chai.request(app).delete('/product/4');

      // assert
      expect(status).to.equal(404);
      expect(body).to.be.an('object');
      expect(body).to.have.property('message');
      expect(body.message).to.equal('Product not found');
    });
  });
});
