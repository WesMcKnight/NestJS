import {Controller, Get, Post, Put, Delete, Param} from "@nestjs/common"

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(
    @Param('type') type: string
  ){
    return []
  }
  
  @Get(':id')
  getReportById(){
    return {}
  }

  @Post()
  createReport(){
    return ('Created')
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