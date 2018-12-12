
<html xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">

<head>
    <meta http-equiv=Content-Type content="text/html; charset=gb2312">
    <meta name=ProgId content=Excel.Sheet>
    <meta name=Generator content="Microsoft Excel 15">
    <link rel="stylesheet" href="./layui/css/layui.css">
    <script src="./layui/layui.js"></script>
    <style>
        <!--table
        {mso-displayed-decimal-separator:"\.";
            mso-displayed-thousand-separator:"\,";}
        @page
        {margin:.74in .51in .73in .57in;
            mso-header-margin:.51in;
            mso-footer-margin:.51in;
            mso-horizontal-page-align:center;}
        ruby
        {ruby-align:left;}
        rt
        {color:windowtext;
            font-size:9.0pt;
            font-weight:400;
            font-style:normal;
            text-decoration:none;
            font-family:宋体;
            mso-generic-font-family:auto;
            mso-font-charset:134;
            mso-char-type:none;
            display:none;}
        -->
        table tr td{
            border: black solid 1px;
            text-align: center;
        }
        table tr{
            width: 900px;
        }
        table tr td input {
            border: none;
            text-align: center;
        }
        .td-c{
            text-align: center;
        }
    </style>

</head>

<body link=blue vlink=purple class=xl66>

<form action="" method="post">
    {{ csrf_field() }}
    <div style="width: 800px">
        <table border=0 cellpadding=0 cellspacing=0 width=902 style='border-collapse:
 collapse;width:676pt'>
            <col class=xl66 width=77 style='mso-width-source:userset;mso-width-alt:2457;
 width:58pt'>
            <col class=xl66 width=94 style='mso-width-source:userset;mso-width-alt:3020;
 width:71pt'>
            <col class=xl66 width=98 style='mso-width-source:userset;mso-width-alt:3123;
 width:73pt'>
            <col class=xl66 width=95 style='mso-width-source:userset;mso-width-alt:3046;
 width:71pt'>
            <col class=xl66 width=214 style='mso-width-source:userset;mso-width-alt:6835;
 width:160pt'>
            <col class=xl66 width=108 style='mso-width-source:userset;mso-width-alt:3456;
 width:81pt'>
            <col class=xl66 width=216 style='mso-width-source:userset;mso-width-alt:6912;
 width:162pt'>
            <col class=xl66 width=72 span=25 style='mso-width-source:userset;mso-width-alt:
 2304;width:54pt'>
            <tr height=64 style='mso-height-source:userset;height:48.0pt'>
                <td colspan=7 height=64 class=xl88 width=902 style='height:48.0pt;width:676pt' >
                    <h3>
                        2018年度灵活就业困难人员和离校未就业高校毕业生社会保险补贴申请表用
                    </h3>
                </td>
            </tr>
            <tr height=35 style='mso-height-source:userset;height:26.4pt'>
                <td height=35 class=xl68 width=77 style='height:26.4pt;border-top:none;
  width:58pt'>
                    <label for="name">姓名</label>
                </td>
                <td colspan=2 class=xl90 width=192 style='border-right:.5pt solid black;
  border-left:none;width:144pt'>
                    <input type="text" autocomplete="off" id="name" name="name">
                </td>
                <td class=xl68 width=95 style='border-top:none;border-left:none;width:71pt'>
                    <label for="sex">性别</label>
                </td>
                <td class=xl68 width=214 style='border-top:none;border-left:none;width:160pt'>

                    男<input type="radio" id="sex" name="sex" value="男" title="男" checked="">
                    女<input type="radio" id="sex" name="sex" value="女" title="女">


                </td>
                <td class=xl68 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <label for="age">年龄</label>
                </td>
                <td class=xl68 width=216 style='border-top:none;border-left:none;width:162pt'>
                    <input type="text" id="age" autocomplete="off" name="age">
                </td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.9pt'>
                <td height=37 class=xl68 width=77 style='height:27.9pt;border-top:none;
  width:58pt'>
                    <label for="id_number">身份证号</label>
                </td>
                <td colspan=4 class=xl90 width=501 style='border-right:.5pt solid black;
  border-left:none;width:375pt'>
                    <input type="text" id="id_number" autocomplete="off" onblur="GetAge(document.getElementById('id_number').value)" name="id_number">
                </td>
                <td class=xl68 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <label for="lose_time">
                        失业时间
                    </label>
                </td>
                <td class=xl68 width=216 style='border-top:none;border-left:none;width:162pt'>
                    <input type="date" id="lose_time" autocomplete="off" name="lose_time">
                </td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.9pt'>
                <td height=37 class=xl68 width=77 style='height:27.9pt;border-top:none;
  width:58pt'>
                    <label for="culture">文化程度</label>
                </td>
                <td class=xl68 width=94 style='border-top:none;border-left:none;width:71pt'>
                    <input type="text" style="width: 80px" id="culture" autocomplete="off" name="culture">

                </td>
                <td colspan=2 class=xl68 width=193 style='border-left:none;width:144pt'>
                    <label for="job_number">就业失业登记证号</label>
                </td>
                <td colspan=3 class=xl90 width=538 style='border-right:.5pt solid black;
  border-left:none;width:403pt'>
                    <input type="text" id="job_number" autocomplete="off" name="job_number">

                </td>
            </tr>
            <tr height=46 style='mso-height-source:userset;height:34.2pt'>
                <td height=46 class=xl68 width=77 style='height:34.2pt;border-top:none;
  width:58pt'>
                    <label for="company">
                        灵活就<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>业单位
                    </label>
                </td>
                <td colspan=4 class=xl90 width=501 style='border-right:.5pt solid black;
  border-left:none;width:375pt'>
                    <input type="text" id="company" autocomplete="off" name="company">

                </td>
                <td class=xl68 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <label for="company_time">
                        灵活就<font
                                class="font0">业时间</font>
                    </label>
                </td>
                <td class=xl68 width=216 style='border-top:none;border-left:none;width:162pt'>
                    <input type="date" id="company_time" autocomplete="off" name="company_time">

                </td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.9pt'>
                <td height=37 class=xl68 width=77 style='height:27.9pt;border-top:none;
  width:58pt'>
                    <label for="address">家庭地址</label>
                </td>
                <td colspan=4 class=xl90 width=501 style='border-right:.5pt solid black;
  border-left:none;width:375pt'>
                    <input type="text" id="address" autocomplete="off" name="address">

                </td>
                <td class=xl68 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <label for="phone">联系电话</label>
                </td>
                <td class=xl68 width=216 style='border-top:none;border-left:none;width:162pt'>
                    <input type="text" id="phone" autocomplete="off" name="phone">

                </td>
            </tr>
            <tr height=35 style='mso-height-source:userset;height:26.4pt'>
                <td height=35 class=xl68 width=77 style='height:26.4pt;border-top:none;
  width:58pt'>
                    <label for="category">人员类别</label>
                </td>
                <td colspan=4 class=xl90 width=501 style='border-right:.5pt solid black;
  border-left:none;width:375pt'>
                    <input type="text" id="category" autocomplete="off" name="category">

                </td>
                <td class=xl68 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <label for="rusticate">所属村居</label>
                </td>
                <td class=xl68 width=216 style='border-top:none;border-left:none;width:162pt'>
                    <input type="text" id="rusticate" autocomplete="off" name="rusticate">

                </td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.9pt'>
                <td height=37 class=xl68 width=77 style='height:27.9pt;border-top:none;
  width:58pt'>补贴项目</td>
                <td class=xl68 width=94 style='border-top:none;border-left:none;width:71pt'>缴费月数</td>
                <td class=xl68 width=98 style='border-top:none;border-left:none;width:73pt'>缴费金额</td>
                <td class=xl68 width=95 style='border-top:none;border-left:none;width:71pt'>月补贴标准</td>
                <td class=xl68 width=214 style='border-top:none;border-left:none;width:160pt'>补贴月数</td>
                <td class=xl68 width=108 style='border-top:none;border-left:none;width:81pt'>补贴金额</td>
                <td class=xl68 width=216 style='border-top:none;border-left:none;width:162pt'>社保补贴金额</td>
            </tr>
            <tr height=45 style='mso-height-source:userset;height:33.9pt'>
                <td height=45 class=xl68 width=77 style='height:33.9pt;border-top:none;
  width:58pt'>养老保<br>
                    险补贴</td>
                <td class=xl69 width=94 style='border-top:none;border-left:none;width:71pt'>　
                    <input type="text" autocomplete="off" style="width: 100px" name="pension_month">

                </td>
                <td class=xl68 width=98 style='border-top:none;border-left:none;width:73pt'>　
                    <input type="text" autocomplete="off" style="width: 100px" name="pension_money">

                </td>
                <td class=xl68 width=95 style='border-top:none;border-left:none;width:71pt'>　
                    <input type="text" id="pension_standard" onblur="getTotal()" autocomplete="off" style="width: 100px" name="pension_standard">

                </td>
                <td class=xl68 width=214 style='border-top:none;border-left:none;width:160pt'>　
                    <input type="text" id="pension_month_total" onblur="getTotal()" autocomplete="off" style="width: 100px" name="pension_month_total">

                </td>
                <td class=xl70 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <input type="text" id="pension_money_total"  autocomplete="off" style="width: 100px" name="pension_money_total">
                </td>
                <td rowspan=2 class=xl105 width=216 style='border-bottom:.5pt solid black;
  border-top:none;width:162pt'>
                    <input type="text" id="pension_medicare_money" autocomplete="off" style="width: 100px" name="pension_medicare_money">

                </td>
            </tr>
            <tr height=45 style='mso-height-source:userset;height:33.9pt'>
                <td height=45 class=xl68 width=77 style='height:33.9pt;border-top:none;
  width:58pt'>医疗保<br>
                    险补贴</td>
                <td class=xl69 width=94 style='border-top:none;border-left:none;width:71pt'>
                    <input type="text" autocomplete="off" style="width: 100px" name="medicare_month">

                </td>
                <td class=xl68 width=98 style='border-top:none;border-left:none;width:73pt'>
                    <input type="text" autocomplete="off" style="width: 100px" name="medicare_money">

                </td>
                <td class=xl68 width=95 style='border-top:none;border-left:none;width:71pt'>
                    <input type="text" autocomplete="off" onblur="getTotal1()" id="medicare_standard" style="width: 100px" name="medicare_standard">

                </td>
                <td class=xl68 width=214 style='border-top:none;border-left:none;width:160pt'>
                    <input type="text" autocomplete="off" onblur="getTotal1()" id="medicare_month_total" style="width: 100px" name="medicare_month_total">

                </td>
                <td class=xl70 width=108 style='border-top:none;border-left:none;width:81pt'>
                    <input type="text" autocomplete="off" id="medicare_money_total"  style="width: 100px" name="medicare_money_total">
                </td>
            </tr>
            <tr height=47 style='mso-height-source:userset;height:35.4pt'>
                <td height=47 class=xl68 width=77 style='height:35.4pt;border-top:none;
  width:58pt'>
                    <label for="card_number">兴业卡号</label>
                </td>
                <td colspan=3 class=xl90 width=287 style='border-right:.5pt solid black;
  border-left:none;width:215pt'>
                    <input type="text"  id="card_number" autocomplete="off" name="card_number">

                </td>
                <td class=xl68 width=214 style='border-top:none;border-left:none;width:160pt'>
                    <label for="is_machine">是否机保缴费</label>
                </td>
                <td colspan=2 class=xl90 width=324 style='border-right:.5pt solid black;
  border-left:none;width:243pt'>
                    <input type="text" id="is_machine" autocomplete="off" name="is_machine">

                </td>
            </tr>
            <tr height=52 style='mso-height-source:userset;height:39.0pt'>
                <td colspan=7 height=52 class=xl93 width=902 style='border-right:.5pt solid black;
  height:39.0pt;width:676pt'><span style='mso-spacerun:yes'>&nbsp;&nbsp;
  </span><font class="font0">请认真填写和核对以上信息并对本人所填信息和提供的材料真实性负责，如有弄虚作假愿负法律责任。</font><font
                            class="font0"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></font></td>
            </tr>
            <tr height=40 style='mso-height-source:userset;height:30.0pt'>
                <td height=40 class=xl71 width=77 style='height:30.0pt;width:58pt'>　</td>
                <td class=xl72 width=94 style='width:71pt'>　</td>
                <td class=xl72 width=98 style='width:73pt'>　</td>
                <td colspan=4 class=xl96 width=633 style='border-right:.5pt solid black;
  width:474pt'>申请人（签字）：<span
                            style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>年<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>月<span
                            style='mso-spacerun:yes'>&nbsp;&nbsp; </span>日</td>
            </tr>
            <tr height=48 style='mso-height-source:userset;height:36.0pt'>
                <td rowspan=4 height=213 class=xl102 width=77 style='border-bottom:.5pt solid black;
  height:159.6pt;border-top:none;width:58pt'>基层人力资源和社会保障工作所（站）意见</td>
                <td colspan=3 rowspan=2 class=xl111 width=287 style='border-right:.5pt solid black;
  width:215pt'>　</td>
                <td rowspan=4 class=xl68 width=214 style='border-top:none;width:160pt'>基层卫计办意见</td>
                <td colspan=2 rowspan=2 class=xl110 width=324 style='border-right:.5pt solid black;
  width:243pt'><span
                            style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><font
                            class="font12">（是或否）实行计划生育的独生子女户、二女户中，男年满40周岁以上、女年满30周岁以上人员</font></td>
            </tr>
            <tr height=93 style='mso-height-source:userset;height:69.6pt'>
            </tr>
            <tr height=35 style='mso-height-source:userset;height:26.4pt'>
                <td colspan=3 height=35 class=xl73 width=287 style='border-right:.5pt solid black;
  height:26.4pt;border-left:none;width:215pt'><span
                            style='mso-spacerun:yes'>&nbsp;</span><font class="font0"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font><font class="font0">单位盖章</font></td>
                <td colspan=2 class=xl73 width=324 style='border-right:.5pt solid black;
  border-left:none;width:243pt'><span
                            style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>单位盖章</td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.6pt'>
                <td colspan=3 height=37 class=xl77 width=287 style='border-right:.5pt solid black;
  height:27.6pt;border-left:none;width:215pt'>经办人:<font class="font0"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font><font class="font0">年</font><font class="font0"><span
                                style='mso-spacerun:yes'>&nbsp; </span></font><font class="font0">月</font><font
                            class="font0"><span style='mso-spacerun:yes'>&nbsp; </span></font><font
                            class="font0">日</font></td>
                <td colspan=2 class=xl77 width=324 style='border-right:.5pt solid black;
  border-left:none;width:243pt'>经办人:<span
                            style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>年<span style='mso-spacerun:yes'>&nbsp; </span>月<span
                            style='mso-spacerun:yes'>&nbsp; </span>日</td>
            </tr>
            <tr height=40 style='mso-height-source:userset;height:30.0pt'>
                <td rowspan=4 height=180 class=xl68 width=77 style='height:135.0pt;
  border-top:none;width:58pt'>城乡居民保中心</td>
                <td colspan=3 rowspan=2 class=xl107 width=287 style='border-right:.5pt solid black;
  width:215pt'><span
                            style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><font
                            class="font0">（是或否）农村被征地农民</font></td>
                <td rowspan=4 class=xl68 width=214 style='border-top:none;width:160pt'>劳动就业中心意见</td>
                <td colspan=2 rowspan=2 class=xl111 width=324 style='border-right:.5pt solid black;
  width:243pt'>　</td>
            </tr>
            <tr height=76 style='mso-height-source:userset;height:57.0pt'>
            </tr>
            <tr height=36 style='mso-height-source:userset;height:27.0pt'>
                <td height=36 class=xl73 width=94 style='height:27.0pt;border-left:none;
  width:71pt'>　</td>
                <td class=xl74 width=98 style='width:73pt'></td>
                <td class=xl75 width=95 style='width:71pt'>单位盖章</td>
                <td class=xl76 width=108 style='border-left:none;width:81pt'>经办人:</td>
                <td class=xl75 width=216 style='width:162pt'><span
                            style='mso-spacerun:yes'>&nbsp;</span><font class="font0"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp; </span></font><font class="font0">单位盖章</font></td>
            </tr>
            <tr height=28 style='mso-height-source:userset;height:21.0pt'>
                <td height=28 class=xl77 width=94 style='height:21.0pt;border-left:none;
  width:71pt'>经办人:</td>
                <td class=xl72 width=98 style='width:73pt'>　</td>
                <td class=xl78 width=95 style='width:71pt'>年<span
                            style='mso-spacerun:yes'>&nbsp; </span>月<span style='mso-spacerun:yes'>&nbsp;
  </span>日</td>
                <td class=xl77 width=108 style='border-left:none;width:81pt'>审核人:</td>
                <td class=xl79 width=216 style='width:162pt'>年<span
                            style='mso-spacerun:yes'>&nbsp; </span>月<font class="font0"> </font><font
                            class="font0"><span style='mso-spacerun:yes'>&nbsp;</span>日</font></td>
            </tr>
            <tr height=86 style='mso-height-source:userset;height:64.8pt'>
                <td colspan=7 height=86 class=xl98 width=902 style='height:64.8pt;width:676pt'>备注：1.申请时应提供身份证和就业失业登记证原件及复印件、永安兴业银行卡（折）复印件；2.农村计生对象、农村被征地农民申请时需到相关部门盖章确认；3.城乡残疾人员、城乡低保人员申请时还需提供残疾人证、低保户证原件及复印件；4.失业一年以上人员、离校1年内未就业高校毕业生申请时还需提供认定表。</td>
            </tr>
            <tr height=58 style='mso-height-source:userset;height:43.2pt'>
                <td height=58 class=xl66 width=77 style='height:43.2pt;width:58pt'></td>
                <td class=xl66 width=94 style='width:71pt'></td>
                <td class=xl66 width=98 style='width:73pt'></td>
                <td class=xl66 width=95 style='width:71pt'></td>
                <td class=xl66 width=214 style='width:160pt'></td>
                <td class=xl66 width=108 style='width:81pt'></td>
                <td class=xl66 width=216 style='width:162pt'></td>
            </tr>
            <tr height=104 style='mso-height-source:userset;height:78.0pt'>
                <td height=104 class=xl68 width=77 style='height:78.0pt;width:58pt'>人员类别</td>
                <td colspan=6 class=xl99 width=825 style='border-left:none;width:618pt'>
                    <input type="checkbox" name="people_category">城镇“<font
                            class="font8">4050</font><font class="font0">”</font><font class="font0">人</font><font
                            class="font0">员；</font><font class="font8"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></font><font
                            class="font0"><input type="checkbox" name="people_category">城乡残疾人员；</font><font class="font8"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></font><font
                            class="font0"><input type="checkbox" name="people_category">城乡低保人员；<br>
                    </font><font class="font0"><input type="checkbox" name="people_category">农村被征地农民；</font><font class="font8"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font><font class="font0"><input type="checkbox" name="people_category">农村计生对象</font><font class="font8"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font><font class="font0"><input type="checkbox" name="people_category">失业一年以上人员<br>
                        <input type="checkbox" name="people_category">离校</font><font class="font8">1</font><font class="font0">年内未就业高校毕业生</font><font
                            class="font8"><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></font><font
                            class="font0"><input type="checkbox" name="people_category">建档立卡的农村贫困户家庭</font></td>
            </tr>
            <tr class=xl67 height=64 style='mso-height-source:userset;height:48.0pt'>
                <td height=64 class=xl68 width=77 style='height:48.0pt;border-top:none;
  width:58pt'>就业形式</td>
                <td colspan=6 class=xl101 width=825 style='border-left:none;width:618pt'><input type="checkbox" name="job_category">单位就业；
                    <font class="font0"><span style='mso-spacerun:yes'>&nbsp;</span></font><font
                            class="font0"><span style='mso-spacerun:yes'>&nbsp;&nbsp;</span><input type="checkbox" name="job_category">自主就业； </font><font
                            class="font0"><span style='mso-spacerun:yes'>&nbsp;</span></font><font
                            class="font0"><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;</span><input type="checkbox" name="job_category">个体经营；</font><font
                            class="font0"> </font><font class="font0"><span
                                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;</span><input type="checkbox" name="job_category">灵活就业；<br>
                        <input type="checkbox" name="job_category">其他自主就业；<span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span><input type="checkbox" name="job_category">公益性岗位安置；<span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span><input type="checkbox" name="job_category">其他就业形式。</font></td>
            </tr>
            <![if supportMisalignedColumns]>
            <tr height=0 style='display:none'>
                <td width=77 style='width:58pt'></td>
                <td width=94 style='width:71pt'></td>
                <td width=98 style='width:73pt'></td>
                <td width=95 style='width:71pt'></td>
                <td width=214 style='width:160pt'></td>
                <td width=108 style='width:81pt'></td>
                <td width=216 style='width:162pt'></td>
            </tr>
            <![endif]>
        </table>
    </div>
    <button type="submit">提交</button>
</form>

</body>
<script>
    function getTotal(){

        var pension_standard = document.getElementById('pension_standard').value;
        var pension_month_total = document.getElementById('pension_month_total').value;
        document.getElementById('pension_money_total').value = pension_standard * pension_month_total;
        var pension_money_total = document.getElementById('pension_money_total').value;
        var medicare_money_total = document.getElementById('medicare_money_total').value;
        var pension_medicare_money = document.getElementById('pension_medicare_money').value;

        document.getElementById('pension_medicare_money').value = Number(pension_money_total) + Number(medicare_money_total);

    }

    function getTotal1(){

        var medicare_standard = document.getElementById('medicare_standard').value;
        var medicare_month_total = document.getElementById('medicare_month_total').value;
        document.getElementById('medicare_money_total').value = medicare_standard * medicare_month_total;
        var pension_money_total = document.getElementById('pension_money_total').value;
        var medicare_money_total = document.getElementById('medicare_money_total').value;
        var pension_medicare_money = document.getElementById('pension_medicare_money').value;

        document.getElementById('pension_medicare_money').value = Number(pension_money_total) + Number(medicare_money_total);

    }

    function GetAge(identityCard) {
        var len = (identityCard + "").length;
        if (len == 0) {
            return 0;
        } else {
            if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
            {
                return 0;
            }
        }
        var strBirthday = "";
        if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
        {
            strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
        }
        if (len == 15) {
            strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
        }
        //时间字符串里，必须是“/”
        var birthDate = new Date(strBirthday);
        var nowDateTime = new Date();
        var age = nowDateTime.getFullYear() - birthDate.getFullYear();
        //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
        if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('age').value = age;
    }
</script>
</html>
