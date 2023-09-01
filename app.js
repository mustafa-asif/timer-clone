var hour;
var min;
var sec;
var s,m,hr,interval;


function start()
{
    hour=document.getElementById("hour");
    min=document.getElementById("min");
    sec=document.getElementById("sec");

    s=sec.value;
    m = min.value;
    hr = hour.value;

    if(s==="")
    {
        s=0;
    }

    if(m==="")
    {
        m=0;
    }

    if(hr==="")
    {
        hr=0;
    }

    

        if(s===0 && m===0 && hr===0)
        {
            alert("set timer");
            stop();
        }
        else
        {
            if(s===60 || m===60 || hr===24)
            {
                alert("wrong input");

            }

            else
            {
                interval=setInterval(()=>
                {
                    if (s===0)
                    {
                        if(m===0)
                        {
                            if(hr===0)
                            {
                                s="";
                                sec.value=s;
                                stop();
                            }

                            else
                            {
                                hr--;
                                m=59;
                                s=60;
                                sec.value=s;
                                min.value=m;
                                hour.value=hr;
                            }
                        }

                        else
                        {
                            m--;
                            s=60;
                            sec.value=s;
                            min.value=m;
                        }
                    }

                    else
                    {
                        s--;
                        sec.value=s;
                    }
                        
                    

                }

                ,1000)
            }

        }
    
}


function stop()
{
    interval=clearInterval(interval);
}

function reset()
{
    stop();
    s=0;
    m=0 ;
    hr=0;
    sec.value=" ";
    min.value=" ";
    hour.value=" ";
}