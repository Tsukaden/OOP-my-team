const Intern = require('../library/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and school if provided valid arguments', () => {
      const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'Harvard');
  
      expect(intern).toEqual({
        name: 'John Doe',
        id: 1,
        email: 'john.doe@test.com',
        school: 'Harvard'
      });
    });

    it('should throw an error if provided no arguments', () => {
      const cb = () => new Intern();
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided a name', () => {
      const cb = () => new Intern('', 1, 'john.doe@test.com', 'Harvard');
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided an ID', () => {
      const cb = () => new Intern('John Doe', null, 'john.doe@test.com', 'Harvard');
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided an email', () => {
      const cb = () => new Intern('John Doe', 1, '', 'Harvard');
      const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided a valid email', () => {
      const cb = () => new Intern('John Doe', 1, 'john.doetest.com', 'Harvard');
      const err = new Error("Expected parameter 'email' to be a valid email address");

      expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided a school', () => {
      const cb = () => new Intern('John Doe', 1, 'john.doe@test.com');
      const err = new Error("Expected parameter 'school' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });

  describe('getSchool', () => {
    it('should return the intern\'s school', () => {
      const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'Harvard');

      expect(intern.getSchool()).toEqual('Harvard');
    });
  });

  describe('getRole', () => {
    it('should return \'Intern\'', () => {
      const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'Harvard');

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});