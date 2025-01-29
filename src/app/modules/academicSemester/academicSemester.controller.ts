import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
        req.body,
    );

    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: 'Academic semester created successfully',
        data: result,
    });
});

export const AcademicSemesterControllers = {
    createAcademicSemester,
};
