const Engineer = require('../library/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and GitHub username', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@test.com', 'johndoe');

      expect(engineer).toEqual(expect.any(Object));
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });

    it('should set the GitHub username using the constructor', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@test.com', 'johndoe');

      expect(engineer.github).toEqual('johndoe');
    });
  });

  describe('getGithub', () => {
    it('should return the GitHub username', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@test.com', 'johndoe');

      expect(engineer.getGithub()).toEqual('johndoe');
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@test.com', 'johndoe');

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});