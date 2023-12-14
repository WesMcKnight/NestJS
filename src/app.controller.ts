import {Controller, Get, Post, Put, Delete, Param, Body} from "@nestjs/common"
import { data, ReportType, } from "src/data";

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType = 
      type === "income" ? ReportType.INCOME: ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }
  
  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType = 
      type === "income" ? ReportType.INCOME: ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find(report => report.id === id)
  }

  @Post()
  createReport(@Body() body: {amount: number; source: string}) {
    console.log({ body });
    return 'Created';
  }

  @Put(':id')
  updateReport(){
    return ('Updated')
  }

  @Delete(':id')
  deleteReport(){
    return ('delete')
  }
  
}

//http://localhost:3000//report/income + the id