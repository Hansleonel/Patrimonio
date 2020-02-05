package pe.gob.mindef.app.web.controller;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Locale;

@Controller
@RequestMapping("/report")
public class ReportController {
    private static final String invoice_template = "/reports/patrimonio.jrxml";

    @RequestMapping(value = {"/asignacion"}, method = RequestMethod.GET)
    public void consultapdf(HttpServletResponse response, Locale locale) throws IOException, JRException {

        JasperPrint jasperPrint = null;

        OutputStream out = response.getOutputStream();


        response.setContentType("application/pdf");
        response.setHeader("Content-disposition", "inline; filename=helloWorldReport.pdf");

        JRDataSource dataSource = new JREmptyDataSource(1);


        JasperReport jasperReport = loadTemplate();
        jasperPrint = JasperFillManager.fillReport(jasperReport, null, dataSource);
        JasperExportManager.exportReportToPdfStream(jasperPrint, out);

    }

    private static JasperReport loadTemplate() throws JRException {
        final InputStream reportInputStream = ReportController.class.getResourceAsStream(invoice_template);
        final JasperDesign jasperDesign = JRXmlLoader.load(reportInputStream);

        return JasperCompileManager.compileReport(jasperDesign);
    }

}
