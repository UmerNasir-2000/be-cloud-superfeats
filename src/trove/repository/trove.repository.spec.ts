import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient, Trove } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import PrismaService from '../../database/database.service';
import TroveRepository from './trove.repository';

describe('TroveRepository', () => {
  let repository: TroveRepository;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TroveRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    repository = module.get<TroveRepository>(TroveRepository);
    prisma = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    it(`should return a list of Trove`, async () => {
      const mockedTroves: Trove[] = [
        {
          id: 'a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f',
          title: 'Trove 1',
          createdAt: new Date(),
        },
        {
          id: '9d953ccc-0780-452e-886f-c5343a432504',
          title: 'Trove 2',
          createdAt: new Date(),
        },
      ];

      prisma.trove.findMany.mockResolvedValue(mockedTroves);

      expect(repository.findAll()).resolves.toEqual(mockedTroves);
    });
  });

  describe('findOne', () => {
    it(`should return trove with the given id`, async () => {
      const mockedTrove: Trove = {
        id: 'a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f',
        title: 'Trove 1',
        createdAt: new Date(),
      };

      prisma.trove.findUniqueOrThrow.mockResolvedValue(mockedTrove);

      expect(
        repository.findOne('a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f'),
      ).resolves.toEqual(mockedTrove);
    });

    it(`should throw an error when trove with given id is not found`, async () => {
      prisma.trove.findUniqueOrThrow.mockRejectedValue(new Error());
      expect(
        repository.findOne('a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f'),
      ).rejects.toThrow();
    });
  });

  describe('create', () => {
    it(`should create a new trove`, async () => {
      const createdAt = new Date();
      const mockedTrove: Trove = {
        id: 'a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f',
        title: 'Trove 1',
        createdAt,
      };

      prisma.trove.create.mockResolvedValue(mockedTrove);

      expect(
        repository.create({
          id: 'a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f',
          title: 'Trove 1',
          createdAt,
        }),
      ).resolves.toEqual(mockedTrove);
    });
  });

  describe('update', () => {
    it(`should update trove when the given id exists`, async () => {
      const mockedTrove: Trove = {
        id: 'a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f',
        title: 'Trove 1',
        createdAt: new Date(),
      };

      prisma.trove.update.mockResolvedValue(mockedTrove);

      expect(
        repository.update('a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f', {
          title: 'Trove 1',
        }),
      ).resolves.toEqual(mockedTrove);
    });

    it(`should throw when trove with given id does not exist`, async () => {
      prisma.trove.update.mockRejectedValue(new Error());
      expect(
        repository.update('a7cbb54d-7c52-4ebf-9ced-e6b86e9a422f', {}),
      ).rejects.toThrow();
    });
  });
});
