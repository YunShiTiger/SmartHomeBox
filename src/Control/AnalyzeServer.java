package Control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import UdpServer.*;


public class AnalyzeServer extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		
		Map<String,String> map = new HashMap<String,String>();
			
		map.put("data0",String.valueOf(AnalyzeData.SensorData[0]));		//厨房MQ2烟雾
		map.put("data1",String.valueOf(AnalyzeData.SensorData[1]));		//厨房MQ4烟雾
		map.put("data2",String.valueOf(AnalyzeData.SensorData[2]));		//卫生间MA135烟雾
		map.put("data3",String.valueOf(AnalyzeData.SensorData[3]));		//客厅温度值
		map.put("data4",String.valueOf(AnalyzeData.SensorData[4]));		//客厅湿度值
		map.put("data5",String.valueOf(AnalyzeData.SensorData[5]));		//卧室温度值
		map.put("data6",String.valueOf(AnalyzeData.SensorData[6]));		//卧室湿度值
		map.put("data7",String.valueOf(AnalyzeData.SensorData[7]));		//门磁状态
		map.put("data8",String.valueOf(AnalyzeData.SensorData[8]));		//红外状态
		map.put("data9",String.valueOf(AnalyzeData.SensorData[9]));		//火焰状态
		
		JSONObject jsonObject = JSONObject.fromObject(map);
		out.print(jsonObject);
		   
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doGet(request, response);
	}

}




