<template>
    <div>
      <el-dialog :title="title" :visible.sync="dialogFormVisible" @close="dialogClose">
        <el-form :model="form"  :rules="rules" ref="ruleForm">
          <el-form-item label="名称" prop="name" :label-width="formLabelWidth" required>
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="国家/地区" prop="country" :label-width="formLabelWidth" required>
            <el-select v-model="form.country" placeholder="请选择国家">
              <el-option label="中国" value="中国"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城市" prop="city" :label-width="formLabelWidth" required>
            <el-select v-model="form.city" placeholder="请选择城市">
              <el-option label="深圳" value="深圳"></el-option>
              <el-option label="广州" value="广州"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" prop="address" :label-width="formLabelWidth" required>
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="type" :label-width="formLabelWidth" required>
            <el-select v-model="form.type" placeholder="请选择类型">
              <el-option label="注册地址" value="注册地址"></el-option>
              <el-option label="总部地址" value="总部地址"></el-option>
              <el-option label="分支办公地址" value="分支办公地址"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input  type="textarea" :rows="5" v-model="form.describe" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogClose">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "addPlace",
      data(){
          return {
            dialogFormVisible:false,
            form: {
              name: '',
              country: '',
              city:'',
              address: '',
              type: '',
              describe: '',
            },
            formLabelWidth: '120px',
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
              ],
              country: [
                { required: true, message: '请选择国家/地区', trigger: 'change' }
              ],
              city: [
                { required: true, message: '请选择城市', trigger: 'change' }
              ],
              address: [
                { required: true, message: '请输入详细地址', trigger: 'blur' }
              ],
              type: [
                { required: true, message: '请选择类型', trigger: 'change' }
              ],
            }
          }
      },
      methods:{
        dialogClose(){
          this.$refs.ruleForm.resetFields();
          this.dialogFormVisible = false;
          this.$emit('dialogClose');
        },
        submit(){
          console.log(this.form)
          // this.$refs.ruleForm.validate((valid) => {
          //   if (valid) {
          //     this.$emit('submit',this.form);
          //     this.dialogFormVisible = false;
          //     this.$emit('dialogClose');
          //   } else {
          //     return false;
          //   }
          // });
          this.$emit('submit',this.form);
          this.dialogFormVisible = false;
          this.$emit('dialogClose');
        }
      },
      watch:{
        addShow(val){
          this.dialogFormVisible = val;
        },
      },
      props:{
        addShow:{},
        title:{}
      }
    }
</script>

<style scoped>

</style>
