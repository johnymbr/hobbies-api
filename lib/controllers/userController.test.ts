import { UserController }  from "./userController";
import { getMockReq, getMockRes } from '@jest-mock/express';
import * as mockingoose from 'mockingoose';
import { User } from '../modules/users/schema';
import { IUser } from "../modules/users/model";
import { Response } from "express";

test("it should pass", async () => {
    expect(true).toBe(true);
});

describe("UserController", () => {
    describe("findAll", () => {
      test("should return empty array", async () => {
        debugger;
        let mReq = getMockReq();
        const mRes: any = {
            json: jest.fn(),
            status: function(code) {
                return this;
            },
        };

        mockingoose(User).toReturn([], "find");

        const controller = new UserController();
        controller.findAll(mReq, mRes);
        // TODO: it's necessary finalize the test. Unfortunately i didn't succeed.
        // expect(mRes.status).toEqual();
      });
    });
  });