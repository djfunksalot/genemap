library(ggplot2)
library(uuid)
library(rjson)  
genes<-list()
i <- 1
while (i < 10) {
    gene_name<-paste("GENE_",i,sep="")
    #generate and save top image
    top_img_uuid<-UUIDgenerate(use.time = NA, n = 1L)
    top_img_filename<-paste("public/images/",top_img_uuid,".png",sep="")
    t=seq(0+i,10+i,0.1)
    y=sin(t)
    qplot(t,y,geom="path", xlab="time", ylab="Sine wave")
    ggsave(top_img_filename,height=3,width=3,units="cm")
    bottom_img_uuid<-UUIDgenerate(use.time = NA, n = 1L)
    bottom_img_filename<-paste("public/images/",bottom_img_uuid,".png",sep="")
    t=seq(0-i,10-i,0.1)
    y=sin(t)
    qplot(t,y,geom="path", xlab="time", ylab="Sine wave")
    ggsave(bottom_img_filename,height=3,width=3,units="cm")
    gene<-list(name=gene_name,images=list(dotplot=bottom_img_uuid,featureplot=top_img_uuid))
    genes <- append(genes, list(gene))
    i = i+1
}
genesJson<-toJSON(genes)
write(genesJson, "src/genes.json")
